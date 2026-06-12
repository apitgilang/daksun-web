import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity publish webhook → on-demand revalidation.
 *
 * Configure in Sanity (Manage → API → Webhooks):
 *   URL:     https://<your-domain>/api/revalidate
 *   Trigger: Create / Update / Delete
 *   Secret:  same value as SANITY_REVALIDATE_SECRET
 *   Projection: { "_type": _type }
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new Response("Bad Request: missing _type", { status: 400 });
    }

    revalidateTag(body._type);
    return NextResponse.json({ revalidated: true, tag: body._type, now: Date.now() });
  } catch (err) {
    console.error("[revalidate] error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

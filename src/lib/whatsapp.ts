import type { Branch, MenuItem } from "@/types/content";

/** Build a wa.me deep-link with a prefilled, URL-encoded message. */
export function waLink(number: string, message: string): string {
  const clean = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(item: MenuItem, branch: Branch): string {
  return `Sampurasun! 🙏\nSaya mau pesan dari Dadakan Sunda *${branch.name}*:\n\n• ${item.name} (1)\n\nApakah tersedia? Hatur nuhun.`;
}

export function reservationMessage(branch: Branch): string {
  return `Sampurasun! 🙏\nSaya mau reservasi meja di Dadakan Sunda *${branch.name}*.\n\nNama:\nJumlah orang:\nTanggal & jam:\n\nHatur nuhun.`;
}

export function eventMessage(branch: Branch): string {
  return `Sampurasun! 🙏\nSaya ingin menanyakan sewa tempat / paket acara di Dadakan Sunda *${branch.name}*.\n\nJenis acara:\nPerkiraan tamu:\nTanggal:\n\nHatur nuhun.`;
}

export function partnerMessage(): string {
  return `Sampurasun! 🙏\nSaya tertarik dengan program kemitraan Dadakan Sunda dan ingin tahu lebih lanjut.\n\nNama:\nKota:\nHatur nuhun.`;
}

export function genericMessage(branch: Branch): string {
  return `Sampurasun! 🙏\nSaya ingin bertanya tentang Dadakan Sunda *${branch.name}*.`;
}

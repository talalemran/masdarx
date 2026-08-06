export interface Ad {
  id: string;
  banner: string;
  title: string;
  description: string;
  link: string;
  advertiser: string;
}

export const ads: Ad[] = [
  {
    id: "hostpapa",
    banner: "/images/hostpapa-banner.webp",
    title: "استضافة HostPapa",
    description:
      "استضافة ويب موثوقة بأسعار تنافسية مع دعم فني على مدار الساعة واسم نطاق مجاني.",
    link: "https://www.hostpapa.com/?a_aid=10626",
    advertiser: "HostPapa",
  },
];

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가족 약 안전 확인",
  description:
    "가족이 공유한 약 성분/주의사항을 기반으로 중복 복용·상호작용 가능성을 빠르게 확인하는 정보 제공형 서비스"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}


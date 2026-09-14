export interface GreyoEyebrowProps {
  /** 섹션 번호(01~08). 생략하면 라벨만 렌더한다. */
  index?: string;
  label: string;
  className?: string;
}

/** 섹션 상단 소제목 — `01 BRAND ESSENCE` 형태의 대문자 트래킹 라벨. */
export function GreyoEyebrow({ index, label, className = '' }: GreyoEyebrowProps) {
  return (
    <p className={`greyo-eyebrow ${className}`.trim()}>
      {index && <span className="greyo-eyebrow__index">{index}</span>}
      {label}
    </p>
  );
}

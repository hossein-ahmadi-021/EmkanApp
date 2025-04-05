"use client";

interface Props {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: () => void;
}

export default function AppInput({
  label,
  placeHolder,
  value = "",
  onChange = () => {},
}: Props) {
  return (
    <div className="w-full">
      {label && <div className="text-base mb-[5px]">{label}</div>}
      <input
        className="border border-[#E6E7E1] w-full h-[60px] px-5 text-base"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

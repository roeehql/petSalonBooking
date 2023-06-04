import React from "react";
import Button from "components/atom/Button";

export const OptionBox = ({
  optionTitle,
  onUseClick,
  onUnuseClick,
  optionValue,
}: {
  optionTitle: string;
  onUseClick: () => void;
  onUnuseClick: () => void;
  optionValue: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-full p-4">
      <h4 className="text-base tracking-tight pb-2">{optionTitle}</h4>
      <div className="flex justify-end w-full mr-4">
        <Button
          type="button"
          text="이용"
          onClick={onUseClick}
          plusStyle={optionValue ? "bg-red-400" : ""}
        />
        <Button
          type="button"
          text="미이용"
          onClick={onUnuseClick}
          plusStyle={optionValue ? "" : "bg-red-400"}
        />
      </div>
    </div>
  );
};

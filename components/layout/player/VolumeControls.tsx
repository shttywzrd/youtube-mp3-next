import React, { useMemo } from "react";
import {
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeHigh,
  IoVolumeOff,
} from "react-icons/io5";
import RangeInput from "../../ui/RangeInput";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import useActions from "../../../hooks/useActions";

const VolumeControls = () => {
  const volume = useTypedSelector((state) => state.player.volume);

  const { setVolume } = useActions();

  const volumeIcon = useMemo(() => renderVolumeIcon(volume), [volume]);

  function volumeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setVolume(+e.target.value);
  }

  function renderVolumeIcon(volume: number) {
    switch (true) {
      case volume == 0:
        return <IoVolumeOff className="peer h-full w-full" />;
      case volume < 25:
        return <IoVolumeLow className="peer h-full w-full" />;
      case volume < 75:
        return <IoVolumeMedium className="peer h-full w-full" />;
      default:
        return <IoVolumeHigh className="peer h-full w-full" />;
    }
  }

  return (
    <div className="col-start-11 col-end-13 hidden items-center gap-1 justify-self-end xs:flex sm:mr-4 ">
      <div className="mr-2 h-7 w-7 sm:mr-0 sm:h-5 sm:w-5">
        {volumeIcon}
        <div className="absolute hidden h-[6rem] w-8 -translate-y-[6rem] -translate-x-0.5 rounded bg-yt-700 xs:hover:block xs:peer-hover:block xs:peer-active:block sm:peer-hover:hidden sm:peer-active:hidden">
          <RangeInput
            value={volume}
            min={0}
            max={100}
            step={1}
            onChange={volumeHandler}
            className="max-w-[50px] translate-y-7 -translate-x-2 -rotate-90 sm:block"
          />
          <div className="h-5 w-5 translate-x-1.5 translate-y-11">
            {volumeIcon}
          </div>
        </div>
      </div>
      <RangeInput
        value={volume}
        min={0}
        max={100}
        step={1}
        onChange={volumeHandler}
        className="hidden max-w-[50px] sm:block md:max-w-[70px] lg:max-w-[90px]"
      />
    </div>
  );
};

export default VolumeControls;

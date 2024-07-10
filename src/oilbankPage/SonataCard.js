import React from "react";
import { useMediaQuery } from "react-responsive";
import hd from "../img/hd.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function SonataCard() {
  const isPcOrMobile = useMediaQuery({ query: "(max-width : 400px)" });

  return (
    <div
      className={`bg-slate-700 opacity-80 items-center justify-center w-full h-1/5 flex 
${isPcOrMobile ? "flex-row" : "flex-row"}
`}
    >
      <div
        className={`min-w-max bg-amber-300 hover:bg-yellow-200 m-2 px-4 py-4 rounded-xl text-center text-gray-900 text-xl w-72 h-32 ${
          isPcOrMobile ? "hidden" : "block mr-10"
        } `}
      >
        <div className="flex flex-row">
          <img
            src={hd}
            alt={hd}
            className={isPcOrMobile ? "w-7 h-5 my-1" : "w-14 h-10"}
          />
          <div
            className={`font-bold text-center ${
              isPcOrMobile ? "mx-2" : "mt-1 mx-3 text-lg"
            }`}
          >
            소나타주유소
          </div>
        </div>
        <div>
          <div className="my-1">
            <div className={`text-start ${isPcOrMobile ? "text-sm" : "my-1"}`}>
              052-232-6363
            </div>
            <div
              className={`text-start ${isPcOrMobile ? "text-xs" : "text-sm"}`}
            >
              울산광역시 동구 방어진순환도로 1280(서부동)
            </div>
          </div>
        </div>
      </div>

      <div className={isPcOrMobile ? "mt-1 mb-1 mr-5" : "mb-5"}>
        <Stack>
          <div
            className={`text-white  ${isPcOrMobile ? "text-sm" : "font-bold"}`}
          >
            구글 별점
          </div>
          <Rating
            name="size-large"
            defaultValue={4.0}
            precision={0.5}
            size="large"
            className="mb-2"
            readOnly
          />
        </Stack>
        <Stack>
          <div
            className={`text-white  ${isPcOrMobile ? "text-sm" : "font-bold"}`}
          >
            네이버 별점
          </div>
          <Rating
            name="size-large"
            defaultValue={4.5}
            precision={0.5}
            size="large"
            readOnly
          />
        </Stack>
      </div>
    </div>
  );
}

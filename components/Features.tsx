import React from "react";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import CopyUrlButton from "./CopyUrlButton";
import DownloadButton from "./DownloadButton";

type Props = {
  formattedLength: string;
};

const Features = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen gap-4 px-4 py-48 -z-10 xl:px-24">
      <div className="flex flex-wrap md:flex-nowrap md:h-[600px] gap-4">
        <div className="flex flex-col w-full h-full gap-4 md:w-1/2">
          <div className="w-full relative bg-[#20E595] items-start rounded-lg md:h-1/2 flex flex-col gap-6 pb-40 md:pb-12 p-8">
            <h2 className="text-3xl font-semibold">Easy way to find icons</h2>
            <p className="z-20">
              You are just one step away from searching through all the icons
              available!
            </p>
            <Link
              href="/icons/brand"
              className="flex items-center mt-auto text-lg duration-150 border-b-2 border-black hover:border-black/40"
            >
              Try it out
              <RxArrowTopRight />
            </Link>
            <div className="absolute flex h-28 bottom-2 right-1">
              <img
                alt=""
                src="/homepage/searching.svg"
                className="h-full"
              />
            </div>
          </div>
          <div className="w-full relative rounded-lg md:h-1/2 flex flex-col gap-6 pb-40 md:pb-12 p-8 bg-[#33CBFC]">
            <h2 className="text-3xl font-semibold">
              Each icon has been sorted
            </h2>
            <p className="z-20">
              To make it easier for you to find certain icon, all of them were
              put into 4 different categories.
            </p>
            <div className="absolute flex h-28 bottom-2 right-1">
              <img
                alt=""
                src="/homepage/sorting.svg"
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full rounded-lg bg-[#FDE255] flex flex-col relative gap-6 pb-40 md:pb-12 p-8">
          <h2 className="text-3xl font-semibold">
            Explore over {props.formattedLength} icons
          </h2>
          <p>
            As a hub for vector icons, the website takes immense pride in
            providing you with an expanding library of high quality icons from
            various free sources. The number of icons is constantly growing, and
            the library is being updated as often as possible to make it even
            bigger.
          </p>
          <div className="absolute left-0 flex justify-end w-full h-32 lg:justify-center md:h-60 bottom-2">
            <img
              alt=""
              src="/homepage/exploring.svg"
              className="h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#963EFF] text-white rounded-lg md:h-96 flex flex-col relative gap-6 pb-40 md:pb-12 p-8">
        <h2 className="text-3xl font-semibold">One click download</h2>
        <p>
          Find the icon you need and after one click of a button download will
          start immediately. No registration, no limits. It could not be easier.
        </p>
        <div className="flex items-start mt-auto">
          <div className="flex flex-col items-center gap-8 rounded-lg">
            <img
              alt="amazon icon"
              className="w-32"
              src="https://firebasestorage.googleapis.com/v0/b/icon-finder-91d39.appspot.com/o/icons%2Fbrand%2Famazon-1.svg?alt=media&token=350384fc-6cc6-4aae-a2a9-70dcc00f0eb0"
            />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <CopyUrlButton
                url="https://firebasestorage.googleapis.com/v0/b/icon-finder-91d39.appspot.com/o/icons%2Fbrand%2Famazon-1.svg?alt=media&token=350384fc-6cc6-4aae-a2a9-70dcc00f0eb0"
                name="amazon-1.svg"
              />
              <DownloadButton
                icon={{
                  url: "https://firebasestorage.googleapis.com/v0/b/icon-finder-91d39.appspot.com/o/icons%2Fbrand%2Famazon-1.svg?alt=media&token=350384fc-6cc6-4aae-a2a9-70dcc00f0eb0",
                  name: "amazon-1.svg",
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute flex h-32 md:h-48 bottom-2 right-1">
          <img
            alt=""
            src="/homepage/delivering.svg"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

/* eslint react/no-unknown-property: ['error', { ignore: ['tw'] }] */
/* eslint-disable jsx-a11y/alt-text */
import { ComponentProps } from 'react';
import { toImage, toSVG } from './utils';

export async function handler(request: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(request.url);
    const fullName = searchParams.get('fullName');
    const jobTitle = searchParams.get('jobTitle');
    const company = searchParams.get('company')?.slice(0, 100);
    let imageUrl = searchParams.get('imageUrl');
    const github = searchParams.get('github');

    for (const [key, value] of Object.entries({ fullName, jobTitle, company })) {
      if (!value) {
        return new Response(`Missing require parameter "${key}".`, { status: 404 });
      }
    }

    if (github) {
      const response = await fetch(`https://api.github.com/users/${github}`, {
        headers: { 'User-Agent': 'request' },
      });

      if (response.status === 200) {
        const data = (await response.json()) as any;
        imageUrl ??= data.avatar_url;
      } else {
        // throw new Error('Failed to fetch user data');
      }
    }

    const rawSvg = await toSVG(
      <>
        <div
          tw="absolute left-0 top-0 w-[100%] h-[100%]"
          style={{
            backgroundImage:
              'linear-gradient(to right, black, black, transparent), url(https://graphql.org/img/conf/graphql-conf-bg.png)',
          }}
        />
        <span tw="absolute bottom-[25px] right-[25px] text-white font-medium text-[20px] font-light">
          — Hosted by The GraphQL Foundation
        </span>
        <div
          tw="flex h-full flex-col w-full justify-center text-white py-20 px-30"
          style={{ gap: 12 }}
        >
          <div tw="flex items-center">
            <GraphQLConf />
            <span tw="ml-3 mr-8 text-[60px] leading-none mb-6 font-medium">2023</span>
            <div tw="rounded-full bg-[#F5009B] py-3 px-5 text-xl font-black flex justify-center items-center mb-1.5">
              <span tw="mb-0.5">ATTENDEE</span>
            </div>
          </div>
          <div tw="flex items-center" style={{ gap: 7 }}>
            <CalendarIcon />
            <span tw="text-[28px] mb-1.5">September 19-21, 2023</span>
            <MarkerIcon tw="ml-7" />
            <span tw="text-[28px] mb-1.5">San Francisco, CA</span>
          </div>
          <div tw="flex mt-10 items-center" style={{ gap: 35 }}>
            {imageUrl && (
              <div
                tw="w-60 h-60 bg-[rgba(255,255,255,.1)] rounded-full border-2 border-white"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: '100% 100%',
                }}
              />
            )}
            <div tw="flex flex-col mb-2.5">
              <span tw="font-bold text-[58px]">{fullName}</span>
              <span tw="font-medium text-[30px] mb-2 mt-2 ml-1">{jobTitle}</span>
              <span tw="font-medium max-w-[400px] text-2xl ml-1">{company}</span>
            </div>
          </div>
        </div>
      </>,
    );

    const buffer = toImage(rawSvg);

    return new Response(buffer, {
      headers: { 'Content-Type': 'image/png' },
    });
  } catch (e) {
    // eslint-disable-next-line no-console -- to debug
    console.error(e);
    return new Response(`Failed to generate the image.\n\nError: ${(e as Error).message}`, {
      status: 500,
    });
  }
}

const GraphQLConf = (props: ComponentProps<'svg'>) => (
  <svg
    width="443"
    height="70"
    viewBox="0 0 272 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5335 12.6392C19.0336 11.7194 18.3167 11.0165 17.3828 10.5298C16.4488 10.0437 15.3508 9.80072 14.088 9.80072C11.9041 9.80072 10.1549 10.5171 8.83985 11.949C7.52338 13.3824 6.86656 15.2947 6.86656 17.686C6.86656 20.2363 7.55732 22.2277 8.93813 23.6597C10.3196 25.0931 12.2194 25.8087 14.6402 25.8087C16.2975 25.8087 17.6988 25.3883 18.8427 24.547C19.9874 23.7063 20.8224 22.4969 21.3491 20.9194H12.7857V15.9517H27.4655V22.2207C26.9657 23.9034 26.1173 25.4675 24.9203 26.9128C23.7226 28.3589 22.2032 29.5288 20.3621 30.4217C18.5203 31.3161 16.4417 31.7626 14.1276 31.7626C11.3908 31.7626 8.95085 31.1649 6.80717 29.9689C4.66279 28.7729 2.9921 27.1099 1.79583 24.9807C0.598137 22.8515 0 20.4207 0 17.686C0 14.9528 0.598137 12.5149 1.79583 10.3722C2.9921 8.2303 4.65642 6.56098 6.78738 5.36427C8.91833 4.16897 11.3512 3.57062 14.088 3.57062C17.4025 3.57062 20.1974 4.37243 22.4733 5.97605C24.7485 7.57967 26.2551 9.80072 26.9918 12.6392H19.5335Z"
      fill="white"
    />
    <path
      d="M40.9212 10.3722C42.1048 9.67561 43.4205 9.32733 44.8671 9.32733V16.4638H43.0126C41.3292 16.4638 40.0657 16.8255 39.2244 17.5482C38.3823 18.2716 37.9617 19.5396 37.9617 21.3531V31.5654H31.2139V9.56399H37.9617V13.2304C38.7507 12.0217 39.7377 11.0687 40.9212 10.3722Z"
      fill="white"
    />
    <path
      d="M48.0452 14.5714C48.8993 12.8632 50.0638 11.5492 51.5372 10.6287C53.0106 9.70895 54.6544 9.24835 56.4701 9.24835C58.022 9.24835 59.3837 9.56413 60.5545 10.195C61.7246 10.8258 62.6261 11.6538 63.2574 12.6788V9.56413H70.0052V31.5655H63.2574V28.4508C62.5992 29.4759 61.685 30.3038 60.5149 30.9347C59.3441 31.5655 57.9824 31.8813 56.4305 31.8813C54.641 31.8813 53.0106 31.4144 51.5372 30.4811C50.0638 29.5486 48.8993 28.2205 48.0452 26.4989C47.1897 24.7773 46.7627 22.7866 46.7627 20.5253C46.7627 18.2647 47.1897 16.2803 48.0452 14.5714ZM61.8568 16.5826C60.9222 15.6099 59.7846 15.1231 58.4433 15.1231C57.1014 15.1231 55.9631 15.6035 55.0299 16.5628C54.0952 17.5222 53.6286 18.8432 53.6286 20.5253C53.6286 22.208 54.0952 23.5418 55.0299 24.5273C55.9631 25.5135 57.1014 26.0058 58.4433 26.0058C59.7846 26.0058 60.9222 25.5198 61.8568 24.547C62.7901 23.575 63.2574 22.2476 63.2574 20.5648C63.2574 18.8828 62.7901 17.5554 61.8568 16.5826Z"
      fill="white"
    />
    <path
      d="M84.3687 10.195C85.5254 9.56413 86.88 9.24835 88.4326 9.24835C90.2482 9.24835 91.8913 9.70895 93.3662 10.6287C94.8382 11.5492 96.0034 12.8632 96.8574 14.5714C97.7129 16.2803 98.14 18.2647 98.14 20.5253C98.14 22.7866 97.7129 24.7773 96.8574 26.4989C96.0034 28.2205 94.8382 29.5486 93.3662 30.4811C91.8913 31.4144 90.2482 31.8813 88.4326 31.8813C86.9069 31.8813 85.5579 31.5655 84.3885 30.9347C83.2169 30.3038 82.3028 29.4893 81.6452 28.4897V42.0541H74.8975V9.56413H81.6452V12.6788C82.3028 11.6538 83.2106 10.8258 84.3687 10.195ZM89.8735 16.5628C88.9388 15.6035 87.7878 15.1231 86.4204 15.1231C85.0785 15.1231 83.9402 15.6099 83.007 16.5826C82.073 17.5554 81.6064 18.8828 81.6064 20.5648C81.6064 22.2476 82.073 23.575 83.007 24.547C83.9402 25.5198 85.0785 26.0058 86.4204 26.0058C87.7624 26.0058 88.9063 25.5135 89.8537 24.5273C90.8011 23.5418 91.2734 22.208 91.2734 20.5253C91.2734 18.8432 90.8068 17.5222 89.8735 16.5628Z"
      fill="white"
    />
    <path
      d="M121.303 11.831C122.829 13.5004 123.592 15.7935 123.592 18.7118V31.5655H116.884V19.6181C116.884 18.1466 116.502 17.0029 115.739 16.1877C114.976 15.3738 113.95 14.9655 112.661 14.9655C111.372 14.9655 110.346 15.3738 109.583 16.1877C108.82 17.0029 108.439 18.1466 108.439 19.6181V31.5655H101.69V2.38733H108.439V12.5212C109.123 11.5492 110.057 10.7735 111.241 10.1949C112.424 9.61705 113.752 9.32741 115.226 9.32741C117.752 9.32741 119.777 10.1617 121.303 11.831Z"
      fill="white"
    />
    <path
      d="M148.02 36.2973L144.468 31.526C143.416 31.7365 142.39 31.8418 141.39 31.8418C138.786 31.8418 136.398 31.237 134.228 30.0276C132.058 28.8189 130.334 27.1298 129.058 24.961C127.782 22.7923 127.145 20.3543 127.145 17.6472C127.145 14.9402 127.782 12.5079 129.058 10.3525C130.334 8.19718 132.058 6.51514 134.228 5.30572C136.398 4.097 138.786 3.49158 141.39 3.49158C143.995 3.49158 146.382 4.097 148.552 5.30572C150.723 6.51514 152.432 8.19718 153.682 10.3525C154.932 12.5079 155.557 14.9402 155.557 17.6472C155.557 20.0124 155.077 22.1748 154.117 24.1331C153.156 26.0913 151.821 27.7147 150.111 29.0026L156.188 36.2973H148.02ZM136.043 23.5022C137.371 24.961 139.154 25.6908 141.39 25.6908C143.6 25.6908 145.369 24.9547 146.698 23.4824C148.026 22.0109 148.69 20.0654 148.69 17.6472C148.69 15.2023 148.026 13.2504 146.698 11.7916C145.369 10.3328 143.6 9.603 141.39 9.603C139.154 9.603 137.371 10.3264 136.043 11.7718C134.715 13.2179 134.05 15.1761 134.05 17.6472C134.05 20.0915 134.715 22.0434 136.043 23.5022Z"
      fill="white"
    />
    <path d="M166.131 26.3612H174.97V31.5655H159.383V3.88574H166.131V26.3612Z" fill="white" />
    <path
      d="M178.839 10.3722C180.022 8.2303 181.673 6.56098 183.79 5.36427C185.908 4.16897 188.309 3.57062 190.992 3.57062C194.281 3.57062 197.095 4.43813 199.438 6.17315C201.778 7.90746 203.344 10.2733 204.133 13.2701H196.714C196.162 12.1136 195.379 11.2334 194.366 10.6287C193.354 10.024 192.202 9.7216 190.914 9.7216C188.835 9.7216 187.151 10.445 185.862 11.8904C184.573 13.3358 183.929 15.2679 183.929 17.686C183.929 20.1049 184.573 22.037 185.862 23.4824C187.151 24.9285 188.835 25.6511 190.914 25.6511C192.202 25.6511 193.354 25.3495 194.366 24.7441C195.379 24.1401 196.162 23.2591 196.714 22.1027H204.133C203.344 25.0987 201.778 27.4589 199.438 29.1798C197.095 30.9021 194.281 31.7626 190.992 31.7626C188.309 31.7626 185.908 31.1649 183.79 29.9689C181.673 28.7729 180.022 27.1099 178.839 24.9807C177.654 22.8515 177.062 20.4207 177.062 17.686C177.062 14.9528 177.654 12.5149 178.839 10.3722Z"
      fill="white"
    />
    <path
      d="M212.479 30.5009C210.755 29.5811 209.401 28.2672 208.414 26.5583C207.427 24.8494 206.935 22.8516 206.935 20.5648C206.935 18.3042 207.434 16.3128 208.434 14.5912C209.433 12.8696 210.802 11.5492 212.538 10.6287C214.274 9.70895 216.221 9.24835 218.378 9.24835C220.535 9.24835 222.483 9.70895 224.218 10.6287C225.955 11.5492 227.323 12.8696 228.323 14.5912C229.322 16.3128 229.822 18.3042 229.822 20.5648C229.822 22.8254 229.315 24.8169 228.303 26.5385C227.29 28.2601 225.909 29.5811 224.16 30.5009C222.41 31.4214 220.456 31.8813 218.299 31.8813C216.142 31.8813 214.201 31.4214 212.479 30.5009ZM221.595 24.6262C222.502 23.6795 222.956 22.326 222.956 20.5648C222.956 18.8037 222.515 17.4494 221.634 16.5035C220.753 15.5569 219.667 15.0843 218.378 15.0843C217.063 15.0843 215.971 15.5512 215.103 16.4837C214.235 17.4169 213.8 18.7775 213.8 20.5648C213.8 22.326 214.228 23.6795 215.083 24.6262C215.938 25.5721 217.01 26.0454 218.299 26.0454C219.588 26.0454 220.687 25.5721 221.595 24.6262Z"
      fill="white"
    />
    <path
      d="M253.007 11.831C254.546 13.5003 255.315 15.7934 255.315 18.7117V31.5654H248.607V19.6181C248.607 18.1465 248.225 17.0028 247.463 16.1876C246.7 15.3738 245.674 14.9654 244.385 14.9654C243.095 14.9654 242.069 15.3738 241.307 16.1876C240.544 17.0028 240.163 18.1465 240.163 19.6181V31.5654H233.414V9.56399H240.163V12.4816C240.846 11.5095 241.767 10.7402 242.925 10.1751C244.082 9.60991 245.385 9.32733 246.831 9.32733C249.41 9.32733 251.468 10.1616 253.007 11.831Z"
      fill="white"
    />
    <path
      d="M271.059 15.1625H267.429V31.5654H260.681V15.1625H258.234V9.564H260.681V8.93315C260.681 6.22607 261.456 4.16891 263.009 2.76239C264.561 1.35657 266.837 0.652954 269.836 0.652954C270.336 0.652954 270.704 0.666377 270.941 0.691808V6.40904C269.651 6.33062 268.744 6.515 268.218 6.96147C267.691 7.40865 267.429 8.21046 267.429 9.36691V9.564H271.059V15.1625Z"
      fill="white"
    />
  </svg>
);

const CalendarIcon = (props: ComponentProps<'svg'>) => (
  <svg
    width="25"
    height="28.5"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    tw="mt-0.5"
    {...props}
  >
    <g clipPath="url(#clip0_371_4109)">
      <path
        d="M7.80787 1.33816C7.80787 0.802889 7.37723 0.372253 6.84196 0.372253C6.30668 0.372253 5.87605 0.802889 5.87605 1.33816V2.94802H4.26619C2.8455 2.94802 1.69043 4.10309 1.69043 5.52378V6.16772V8.09954V18.4026C1.69043 19.8233 2.8455 20.9784 4.26619 20.9784H17.145C18.5657 20.9784 19.7208 19.8233 19.7208 18.4026V8.09954V6.16772V5.52378C19.7208 4.10309 18.5657 2.94802 17.145 2.94802H15.5352V1.33816C15.5352 0.802889 15.1045 0.372253 14.5692 0.372253C14.034 0.372253 13.6033 0.802889 13.6033 1.33816V2.94802H7.80787V1.33816ZM3.62225 8.09954H17.789V18.4026C17.789 18.7568 17.4992 19.0465 17.145 19.0465H4.26619C3.91203 19.0465 3.62225 18.7568 3.62225 18.4026V8.09954Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_371_4109">
        <rect width="20.8476" height="23.2302" fill="white" transform="translate(0 0.0918579)" />
      </clipPath>
    </defs>
  </svg>
);

const MarkerIcon = (props: ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 512 512"
    fill="white"
    tw="mt-0.5"
    {...props}
  >
    <path
      d="M256,0C139.563,0,45.172,94.406,45.172,210.828S210.875,512,256,512c45.109,0,210.828-184.75,210.828-301.172
		S372.438,0,256,0z M256,307.594c-53.453,0-96.766-43.328-96.766-96.766c0-53.453,43.313-96.766,96.766-96.766
		c53.438,0,96.766,43.313,96.766,96.766C352.766,264.266,309.438,307.594,256,307.594z"
    />
  </svg>
);

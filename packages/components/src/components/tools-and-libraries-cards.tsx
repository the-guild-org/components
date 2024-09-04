import { cn } from '../cn';
import { PRODUCTS, SIX_HIGHLIGHTED_PRODUCTS } from '../products';
import { CallToAction } from './call-to-action';
import { HighlightDecoration } from './decorations';
import { Heading } from './heading';
import { ArrowIcon, CodegenIcon, HiveIcon, MeshIcon, YogaIcon } from './icons';

export function ToolsAndLibrariesCards({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'isolate flex flex-col gap-6 px-4 py-6 lg:gap-12 lg:px-[120px] lg:py-24',
        className,
      )}
    >
      <Heading as="h2" size="md" className="text-green-1000">
        Discover the complete ecosystem of tools and libraries
      </Heading>
      <p className="text-green-800">Complete GraphQL Management Stack</p>
      <MainCards />
      <p className="text-green-800">Our libraries to support all your GraphQL needs</p>
      <SecondaryCards />
      <CallToAction href="https://github.com/the-guild-org" variant="primary">
        Explore the Ecosystem
      </CallToAction>
    </section>
  );
}

function MainCards() {
  const products = [PRODUCTS.HIVE, PRODUCTS.YOGA, PRODUCTS.MESH, PRODUCTS.CODEGEN];
  const icons = [HiveIcon, YogaIcon, MeshIcon, CodegenIcon];

  return (
    <ul className="-mx-12 flex grid-cols-2 flex-row gap-[22px] overflow-auto px-12 lg:grid xl:grid-cols-4">
      {products.map((product, i) => {
        const Icon = icons[i];
        const Decoration = cardDecorations[product.name];
        return (
          <li
            key={product.name}
            className="group relative flex-1 shrink-0 basis-[283.5px] overflow-hidden rounded-2xl bg-blue-400 text-green-1000 first-of-type:bg-green-1000 first-of-type:text-white max-md:w-[283.5px]"
          >
            <a className="relative z-10 block flex-1 p-8" href={product.href}>
              <p className="font-medium">{product.name}</p>
              <Icon className="mt-8" />
              <ArrowIcon className="absolute bottom-8 right-8" />
            </a>
            <Decoration
              className="pointer-events-none absolute bottom-0 right-0 fill-blue-200 stroke-[0.5px] opacity-0 transition-opacity duration-500 group-first-of-type:fill-blue-700 group-hover:opacity-100"
              preserveAspectRatio="xMidYMid meet"
            />
            <HighlightDecoration className="pointer-events-none absolute left-0 top-[-15%] h-[150%] w-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
          </li>
        );
      })}
    </ul>
  );
}

function SecondaryCards() {
  return (
    <ul className="flex h-max grid-cols-6 flex-row gap-[22px] overflow-x-auto overflow-y-hidden max-sm:-mx-8 max-sm:px-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {SIX_HIGHLIGHTED_PRODUCTS.map(product => {
        const Logo = product.logo;
        return (
          <li
            key={product.name}
            className="shrink-0 basis-[283.5px] rounded-2xl bg-beige-200 text-green-1000 transition-colors duration-500 hover:bg-beige-400 max-sm:min-w-[283.5px]"
          >
            <a href={product.href} className="relative flex h-full flex-col rounded-[inherit] p-8">
              <p className="font-medium">{product.name}</p>
              <p className="mt-2 text-sm text-green-800">{product.title}</p>
              <div className="h-8 grow" />
              <div
                role="presentation"
                className="flex size-8 items-center justify-center rounded bg-green-1000 text-sm font-medium leading-5 text-white"
              >
                <Logo />
              </div>
              <ArrowIcon className="absolute bottom-8 right-8" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const cardDecorations = {
  [PRODUCTS.HIVE.name](props: React.SVGAttributes<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="174"
        viewBox="0 0 160 172"
        fill="none"
        {...props}
      >
        <mask
          id="path-1-outside-1_642_4223"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-52"
          width="265"
          height="265"
          fill="black"
        >
          <rect fill="white" y="-52" width="265" height="265" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M79.8868 -51H185.113L264 27.8868V133.113L185.113 212H79.8868L1 133.113V27.8868L79.8868 -51ZM146.836 195.215L247.204 94.8463C255.126 86.9252 255.126 74.085 247.204 66.1639L146.836 -34.2043C138.915 -42.1255 126.075 -42.1255 118.154 -34.2043L17.7957 66.1639C9.87451 74.085 9.87451 86.9252 17.7957 94.8463L118.154 195.215C126.075 203.136 138.915 203.136 146.836 195.215ZM104.963 80.4952L132.495 52.9631L160.027 80.4952L132.495 108.027L104.963 80.4952Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.8868 -51H185.113L264 27.8868V133.113L185.113 212H79.8868L1 133.113V27.8868L79.8868 -51ZM146.836 195.215L247.204 94.8463C255.126 86.9252 255.126 74.085 247.204 66.1639L146.836 -34.2043C138.915 -42.1255 126.075 -42.1255 118.154 -34.2043L17.7957 66.1639C9.87451 74.085 9.87451 86.9252 17.7957 94.8463L118.154 195.215C126.075 203.136 138.915 203.136 146.836 195.215ZM104.963 80.4952L132.495 52.9631L160.027 80.4952L132.495 108.027L104.963 80.4952Z"
          fill="url(#paint0_linear_642_4223)"
        />
        <path
          d="M185.113 -51L185.467 -51.3536L185.32 -51.5H185.113V-51ZM79.8868 -51V-51.5H79.6797L79.5333 -51.3536L79.8868 -51ZM264 27.8868H264.5V27.6797L264.354 27.5333L264 27.8868ZM264 133.113L264.354 133.467L264.5 133.32V133.113H264ZM185.113 212V212.5H185.32L185.467 212.354L185.113 212ZM79.8868 212L79.5333 212.354L79.6797 212.5H79.8868V212ZM1 133.113H0.5V133.32L0.646447 133.467L1 133.113ZM1 27.8868L0.646447 27.5333L0.5 27.6797V27.8868H1ZM146.836 195.215L147.19 195.568L146.836 195.215ZM247.204 66.1639L246.851 66.5174L247.204 66.1639ZM146.836 -34.2043L147.19 -34.5579L146.836 -34.2043ZM118.154 -34.2043L117.8 -34.5579L117.8 -34.5579L118.154 -34.2043ZM17.7957 66.1639L18.1492 66.5174L18.1492 66.5174L17.7957 66.1639ZM17.7957 94.8463L18.1492 94.4928L18.1492 94.4928L17.7957 94.8463ZM118.154 195.215L117.8 195.568L117.8 195.568L118.154 195.215ZM132.495 52.9631L132.849 52.6096L132.495 52.256L132.142 52.6096L132.495 52.9631ZM104.963 80.4952L104.609 80.1417L104.256 80.4952L104.609 80.8488L104.963 80.4952ZM160.027 80.4952L160.381 80.8488L160.734 80.4952L160.381 80.1417L160.027 80.4952ZM132.495 108.027L132.142 108.381L132.495 108.734L132.849 108.381L132.495 108.027ZM185.113 -51.5H79.8868V-50.5H185.113V-51.5ZM264.354 27.5333L185.467 -51.3536L184.76 -50.6464L263.646 28.2404L264.354 27.5333ZM264.5 133.113V27.8868H263.5V133.113H264.5ZM185.467 212.354L264.354 133.467L263.646 132.76L184.76 211.646L185.467 212.354ZM79.8868 212.5H185.113V211.5H79.8868V212.5ZM0.646447 133.467L79.5333 212.354L80.2404 211.646L1.35355 132.76L0.646447 133.467ZM0.5 27.8868V133.113H1.5V27.8868H0.5ZM79.5333 -51.3536L0.646447 27.5333L1.35355 28.2404L80.2404 -50.6464L79.5333 -51.3536ZM246.851 94.4928L146.483 194.861L147.19 195.568L247.558 95.1998L246.851 94.4928ZM246.851 66.5174C254.577 74.2433 254.577 86.7669 246.851 94.4928L247.558 95.1998C255.674 87.0835 255.674 73.9267 247.558 65.8103L246.851 66.5174ZM146.483 -33.8508L246.851 66.5174L247.558 65.8103L147.19 -34.5579L146.483 -33.8508ZM118.507 -33.8508C126.233 -41.5767 138.757 -41.5767 146.483 -33.8508L147.19 -34.5579C139.073 -42.6743 125.917 -42.6743 117.8 -34.5579L118.507 -33.8508ZM18.1492 66.5174L118.507 -33.8508L117.8 -34.5579L17.4421 65.8103L18.1492 66.5174ZM18.1492 94.4928C10.4233 86.7669 10.4233 74.2433 18.1492 66.5174L17.4421 65.8103C9.3257 73.9267 9.3257 87.0835 17.4421 95.1998L18.1492 94.4928ZM118.507 194.861L18.1492 94.4928L17.4421 95.1998L117.8 195.568L118.507 194.861ZM146.483 194.861C138.757 202.587 126.233 202.587 118.507 194.861L117.8 195.568C125.917 203.684 139.073 203.684 147.19 195.568L146.483 194.861ZM132.142 52.6096L104.609 80.1417L105.317 80.8488L132.849 53.3167L132.142 52.6096ZM160.381 80.1417L132.849 52.6096L132.142 53.3167L159.674 80.8488L160.381 80.1417ZM132.849 108.381L160.381 80.8488L159.674 80.1417L132.142 107.674L132.849 108.381ZM104.609 80.8488L132.142 108.381L132.849 107.674L105.317 80.1417L104.609 80.8488Z"
          fill="url(#paint1_linear_642_4223)"
          mask="url(#path-1-outside-1_642_4223)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_642_4223"
            x1="0.999999"
            y1="2"
            x2="161"
            y2="171"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B736A" />
            <stop offset="1" stopColor="#245850" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_642_4223"
            x1="1"
            y1="5"
            x2="161"
            y2="173.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  [PRODUCTS.YOGA.name](props: React.SVGAttributes<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="211"
        height="163"
        viewBox="0 0 211 163"
        fill="none"
        {...props}
      >
        <mask
          id="path-1-outside-1_642_4128"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="334"
          height="340"
          fill="black"
        >
          <rect fill="white" width="334" height="340" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M222.174 67.0744H169.727L201.223 35.5783L166.657 1L132.079 35.5783L163.575 67.0744H111.128C104.378 67.0744 97.8956 69.7617 93.1196 74.5377L1 166.657L35.5783 201.236L148.649 88.1653C158.595 78.2184 174.719 78.2184 184.666 88.1653L297.736 201.236L332.315 166.657L240.182 74.525C235.406 69.749 228.924 67.0617 222.174 67.0617V67.0744ZM166.656 269.854L132.083 304.427L166.656 339L201.229 304.427L166.656 269.854ZM111.141 201.239H166.657H166.683H222.199C228.949 201.239 235.432 203.927 240.208 208.703L266.788 235.283L232.21 269.861L184.679 222.33C174.732 212.383 158.608 212.383 148.661 222.33L101.131 269.861L66.5522 235.283L93.1323 208.703C97.9083 203.927 104.391 201.239 111.141 201.239Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M222.174 67.0744H169.727L201.223 35.5783L166.657 1L132.079 35.5783L163.575 67.0744H111.128C104.378 67.0744 97.8956 69.7617 93.1196 74.5377L1 166.657L35.5783 201.236L148.649 88.1653C158.595 78.2184 174.719 78.2184 184.666 88.1653L297.736 201.236L332.315 166.657L240.182 74.525C235.406 69.749 228.924 67.0617 222.174 67.0617V67.0744ZM166.656 269.854L132.083 304.427L166.656 339L201.229 304.427L166.656 269.854ZM111.141 201.239H166.657H166.683H222.199C228.949 201.239 235.432 203.927 240.208 208.703L266.788 235.283L232.21 269.861L184.679 222.33C174.732 212.383 158.608 212.383 148.661 222.33L101.131 269.861L66.5522 235.283L93.1323 208.703C97.9083 203.927 104.391 201.239 111.141 201.239Z"
          fill="url(#paint0_linear_642_4128)"
        />
        <path
          d="M169.727 67.0744L169.373 66.7209L168.52 67.5744H169.727V67.0744ZM222.174 67.0744V67.5744H222.674V67.0744H222.174ZM201.223 35.5783L201.576 35.9318L201.93 35.5783L201.576 35.2248L201.223 35.5783ZM166.657 1L167.011 0.646512L166.657 0.292828L166.304 0.646447L166.657 1ZM132.079 35.5783L131.725 35.2247L131.372 35.5783L131.725 35.9318L132.079 35.5783ZM163.575 67.0744V67.5744H164.782L163.929 66.7209L163.575 67.0744ZM1 166.657L0.646447 166.304L0.292893 166.657L0.646447 167.011L1 166.657ZM35.5783 201.236L35.2247 201.589L35.5783 201.943L35.9318 201.589L35.5783 201.236ZM148.649 88.1653L149.002 88.5188L148.649 88.1653ZM184.666 88.1653L184.312 88.5188L184.666 88.1653ZM297.736 201.236L297.383 201.589L297.736 201.943L298.09 201.589L297.736 201.236ZM332.315 166.657L332.668 167.011L333.022 166.657L332.668 166.304L332.315 166.657ZM240.182 74.525L239.829 74.8785L240.182 74.525ZM222.174 67.0617V66.5617H221.674V67.0617H222.174ZM132.083 304.427L131.73 304.073L131.376 304.427L131.73 304.78L132.083 304.427ZM166.656 269.854L167.01 269.5L166.656 269.147L166.303 269.5L166.656 269.854ZM166.656 339L166.303 339.353L166.656 339.707L167.01 339.353L166.656 339ZM201.229 304.427L201.583 304.78L201.936 304.427L201.583 304.073L201.229 304.427ZM240.208 208.703L240.561 208.349V208.349L240.208 208.703ZM266.788 235.283L267.141 235.636L267.495 235.283L267.141 234.929L266.788 235.283ZM232.21 269.861L231.856 270.214L232.21 270.568L232.563 270.214L232.21 269.861ZM148.661 222.33L149.015 222.684L148.661 222.33ZM101.131 269.861L100.777 270.214L101.131 270.568L101.484 270.214L101.131 269.861ZM66.5522 235.283L66.1987 234.929L65.8451 235.283L66.1987 235.636L66.5522 235.283ZM169.727 67.5744H222.174V66.5744H169.727V67.5744ZM200.869 35.2247L169.373 66.7209L170.08 67.428L201.576 35.9318L200.869 35.2247ZM166.304 1.35349L200.869 35.9318L201.576 35.2248L167.011 0.646512L166.304 1.35349ZM132.433 35.9318L167.011 1.35355L166.304 0.646447L131.725 35.2247L132.433 35.9318ZM163.929 66.7209L132.433 35.2247L131.725 35.9318L163.222 67.428L163.929 66.7209ZM111.128 67.5744H163.575V66.5744H111.128V67.5744ZM93.4731 74.8913C98.1555 70.2089 104.511 67.5744 111.128 67.5744V66.5744C104.245 66.5744 97.6357 69.3145 92.766 74.1842L93.4731 74.8913ZM1.35355 167.011L93.4731 74.8913L92.766 74.1842L0.646447 166.304L1.35355 167.011ZM35.9318 200.882L1.35355 166.304L0.646447 167.011L35.2247 201.589L35.9318 200.882ZM148.295 87.8117L35.2247 200.882L35.9318 201.589L149.002 88.5188L148.295 87.8117ZM185.02 87.8117C174.877 77.6696 158.437 77.6696 148.295 87.8117L149.002 88.5188C158.754 78.7672 174.561 78.7672 184.312 88.5188L185.02 87.8117ZM298.09 200.882L185.02 87.8117L184.312 88.5188L297.383 201.589L298.09 200.882ZM331.961 166.304L297.383 200.882L298.09 201.589L332.668 167.011L331.961 166.304ZM239.829 74.8785L331.961 167.011L332.668 166.304L240.536 74.1714L239.829 74.8785ZM222.174 67.5617C228.791 67.5617 235.146 70.1962 239.829 74.8785L240.536 74.1714C235.666 69.3018 229.056 66.5617 222.174 66.5617V67.5617ZM222.674 67.0744V67.0617H221.674V67.0744H222.674ZM132.437 304.78L167.01 270.207L166.303 269.5L131.73 304.073L132.437 304.78ZM167.01 338.646L132.437 304.073L131.73 304.78L166.303 339.353L167.01 338.646ZM200.876 304.073L166.303 338.646L167.01 339.353L201.583 304.78L200.876 304.073ZM166.303 270.207L200.876 304.78L201.583 304.073L167.01 269.5L166.303 270.207ZM166.657 200.739H111.141V201.739H166.657V200.739ZM166.683 200.739H166.657V201.739H166.683V200.739ZM222.199 200.739H166.683V201.739H222.199V200.739ZM240.561 208.349C235.692 203.479 229.082 200.739 222.199 200.739V201.739C228.816 201.739 235.172 204.374 239.854 209.056L240.561 208.349ZM267.141 234.929L240.561 208.349L239.854 209.056L266.434 235.636L267.141 234.929ZM232.563 270.214L267.141 235.636L266.434 234.929L231.856 269.507L232.563 270.214ZM184.325 222.684L231.856 270.214L232.563 269.507L185.032 221.977L184.325 222.684ZM149.015 222.684C158.766 212.932 174.574 212.932 184.325 222.684L185.032 221.977C174.89 211.834 158.45 211.834 148.308 221.977L149.015 222.684ZM101.484 270.214L149.015 222.684L148.308 221.977L100.777 269.507L101.484 270.214ZM66.1987 235.636L100.777 270.214L101.484 269.507L66.9058 234.929L66.1987 235.636ZM92.7787 208.349L66.1987 234.929L66.9058 235.636L93.4858 209.056L92.7787 208.349ZM111.141 200.739C104.258 200.739 97.6484 203.479 92.7787 208.349L93.4858 209.056C98.1682 204.374 104.524 201.739 111.141 201.739V200.739Z"
          fill="url(#paint1_linear_642_4128)"
          mask="url(#path-1-outside-1_642_4128)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_642_4128"
            x1="82.5"
            y1="43"
            x2="183.837"
            y2="159.975"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_642_4128"
            x1="100.5"
            y1="53.5"
            x2="210.094"
            y2="158.311"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  [PRODUCTS.MESH.name](props: React.SVGAttributes<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="174"
        viewBox="0 0 156 172"
        fill="none"
        {...props}
      >
        <mask
          id="path-1-outside-1_642_4203"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-75"
          width="248"
          height="248"
          fill="black"
        >
          <rect fill="white" y="-75" width="248" height="248" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M213.474 -37.2159L246.99 -3.69922H247V101.699L213.483 135.216L210.216 138.483L176.699 172H71.3008L37.7841 138.483L34.5167 135.216L1 101.699V-3.69922L34.5071 -37.2159L37.7745 -40.4833L71.2912 -74H176.69L210.206 -40.4833L213.474 -37.2159ZM56.9474 135.206H191.043C201.631 135.206 210.206 126.631 210.206 116.043V-18.0526C210.206 -28.6403 201.631 -37.2159 191.043 -37.2159H56.9474C46.3597 -37.2159 37.7841 -28.6403 37.7841 -18.0526V116.043C37.7841 126.631 46.3597 135.206 56.9474 135.206ZM70.9266 83.0905V14.8977C70.9266 4.30997 79.5022 -4.26562 90.09 -4.26562H157.9C168.487 -4.26562 177.063 4.30997 177.063 14.8977V83.0905C177.063 93.6783 168.487 102.254 157.9 102.254H90.09C79.5022 102.254 70.9266 93.6783 70.9266 83.0905ZM140.279 65.4698V32.5184H107.711V65.4698H140.279Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M213.474 -37.2159L246.99 -3.69922H247V101.699L213.483 135.216L210.216 138.483L176.699 172H71.3008L37.7841 138.483L34.5167 135.216L1 101.699V-3.69922L34.5071 -37.2159L37.7745 -40.4833L71.2912 -74H176.69L210.206 -40.4833L213.474 -37.2159ZM56.9474 135.206H191.043C201.631 135.206 210.206 126.631 210.206 116.043V-18.0526C210.206 -28.6403 201.631 -37.2159 191.043 -37.2159H56.9474C46.3597 -37.2159 37.7841 -28.6403 37.7841 -18.0526V116.043C37.7841 126.631 46.3597 135.206 56.9474 135.206ZM70.9266 83.0905V14.8977C70.9266 4.30997 79.5022 -4.26562 90.09 -4.26562H157.9C168.487 -4.26562 177.063 4.30997 177.063 14.8977V83.0905C177.063 93.6783 168.487 102.254 157.9 102.254H90.09C79.5022 102.254 70.9266 93.6783 70.9266 83.0905ZM140.279 65.4698V32.5184H107.711V65.4698H140.279Z"
          fill="url(#paint0_linear_642_4203)"
        />
        <path
          d="M246.99 -3.69922L246.637 -3.34566L246.783 -3.19922H246.99V-3.69922ZM213.474 -37.2159L213.827 -37.5695L213.474 -37.2159ZM247 -3.69922H247.5V-4.19922H247V-3.69922ZM247 101.699L247.354 102.053L247.5 101.906V101.699H247ZM213.483 135.216L213.837 135.57L213.483 135.216ZM210.216 138.483L210.57 138.837L210.216 138.483ZM176.699 172V172.5H176.906L177.053 172.354L176.699 172ZM71.3008 172L70.9472 172.354L71.0937 172.5H71.3008V172ZM37.7841 138.483L38.1376 138.13V138.13L37.7841 138.483ZM34.5167 135.216L34.1632 135.57V135.57L34.5167 135.216ZM1 101.699H0.5V101.906L0.646447 102.053L1 101.699ZM1 -3.69922L0.646396 -4.05272L0.5 -3.90628V-3.69922H1ZM34.5071 -37.2159L34.1536 -37.5695L34.1535 -37.5694L34.5071 -37.2159ZM37.7745 -40.4833L38.128 -40.1297L37.7745 -40.4833ZM71.2912 -74V-74.5H71.0841L70.9376 -74.3536L71.2912 -74ZM176.69 -74L177.043 -74.3536L176.897 -74.5H176.69V-74ZM210.206 -40.4833L209.853 -40.1297L210.206 -40.4833ZM140.279 32.5184H140.779V32.0184H140.279V32.5184ZM140.279 65.4698V65.9698H140.779V65.4698H140.279ZM107.711 32.5184V32.0184H107.211V32.5184H107.711ZM107.711 65.4698H107.211V65.9698H107.711V65.4698ZM247.344 -4.05277L213.827 -37.5695L213.12 -36.8624L246.637 -3.34566L247.344 -4.05277ZM247 -4.19922H246.99V-3.19922H247V-4.19922ZM247.5 101.699V-3.69922H246.5V101.699H247.5ZM213.837 135.57L247.354 102.053L246.646 101.346L213.13 134.862L213.837 135.57ZM210.57 138.837L213.837 135.57L213.13 134.862L209.862 138.13L210.57 138.837ZM177.053 172.354L210.57 138.837L209.862 138.13L176.346 171.646L177.053 172.354ZM71.3008 172.5H176.699V171.5H71.3008V172.5ZM37.4305 138.837L70.9472 172.354L71.6543 171.646L38.1376 138.13L37.4305 138.837ZM34.1632 135.57L37.4305 138.837L38.1376 138.13L34.8703 134.862L34.1632 135.57ZM0.646447 102.053L34.1632 135.57L34.8703 134.862L1.35355 101.346L0.646447 102.053ZM0.5 -3.69922V101.699H1.5V-3.69922H0.5ZM34.1535 -37.5694L0.646396 -4.05272L1.3536 -3.34572L34.8607 -36.8624L34.1535 -37.5694ZM37.4209 -40.8368L34.1536 -37.5695L34.8607 -36.8624L38.128 -40.1297L37.4209 -40.8368ZM70.9376 -74.3536L37.4209 -40.8368L38.128 -40.1297L71.6447 -73.6464L70.9376 -74.3536ZM176.69 -74.5H71.2912V-73.5H176.69V-74.5ZM210.56 -40.8368L177.043 -74.3536L176.336 -73.6464L209.853 -40.1297L210.56 -40.8368ZM213.827 -37.5695L210.56 -40.8368L209.853 -40.1297L213.12 -36.8624L213.827 -37.5695ZM191.043 134.706H56.9474V135.706H191.043V134.706ZM209.706 116.043C209.706 126.355 201.355 134.706 191.043 134.706V135.706C201.907 135.706 210.706 126.907 210.706 116.043H209.706ZM209.706 -18.0526V116.043H210.706V-18.0526H209.706ZM191.043 -36.7159C201.355 -36.7159 209.706 -28.3642 209.706 -18.0526H210.706C210.706 -28.9165 201.907 -37.7159 191.043 -37.7159V-36.7159ZM56.9474 -36.7159H191.043V-37.7159H56.9474V-36.7159ZM38.2841 -18.0526C38.2841 -28.3642 46.6358 -36.7159 56.9474 -36.7159V-37.7159C46.0835 -37.7159 37.2841 -28.9165 37.2841 -18.0526H38.2841ZM38.2841 116.043V-18.0526H37.2841V116.043H38.2841ZM56.9474 134.706C46.6358 134.706 38.2841 126.355 38.2841 116.043H37.2841C37.2841 126.907 46.0835 135.706 56.9474 135.706V134.706ZM70.4266 14.8977V83.0905H71.4266V14.8977H70.4266ZM90.09 -4.76562C79.2261 -4.76562 70.4266 4.03383 70.4266 14.8977H71.4266C71.4266 4.58612 79.7784 -3.76562 90.09 -3.76562V-4.76562ZM157.9 -4.76562H90.09V-3.76562H157.9V-4.76562ZM177.563 14.8977C177.563 4.03383 168.763 -4.76562 157.9 -4.76562V-3.76562C168.211 -3.76562 176.563 4.58612 176.563 14.8977H177.563ZM177.563 83.0905V14.8977H176.563V83.0905H177.563ZM157.9 102.754C168.763 102.754 177.563 93.9544 177.563 83.0905H176.563C176.563 93.4021 168.211 101.754 157.9 101.754V102.754ZM90.09 102.754H157.9V101.754H90.09V102.754ZM70.4266 83.0905C70.4266 93.9544 79.2261 102.754 90.09 102.754V101.754C79.7784 101.754 71.4266 93.4021 71.4266 83.0905H70.4266ZM139.779 32.5184V65.4698H140.779V32.5184H139.779ZM107.711 33.0184H140.279V32.0184H107.711V33.0184ZM108.211 65.4698V32.5184H107.211V65.4698H108.211ZM140.279 64.9698H107.711V65.9698H140.279V64.9698Z"
          fill="url(#paint1_linear_642_4203)"
          mask="url(#path-1-outside-1_642_4203)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_642_4203"
            x1="1"
            y1="-1"
            x2="143.007"
            y2="171.994"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_642_4203"
            x1="0.999998"
            y1="0.500001"
            x2="140.501"
            y2="171.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
  [PRODUCTS.CODEGEN.name](props: React.SVGAttributes<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="177"
        height="174"
        viewBox="0 0 177 172"
        fill="none"
        {...props}
      >
        <mask
          id="path-1-outside-1_642_4281"
          maskUnits="userSpaceOnUse"
          x="-0.00109863"
          y="-1"
          width="287"
          height="287"
          fill="black"
        >
          <rect fill="white" x="-0.00109863" y="-1" width="287" height="287" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.753 29.7401L143.493 0L173.234 29.7401L143.493 59.4801L113.753 29.7401ZM229.616 86.1333L199.871 56.3887L158.985 97.2752C150.428 105.832 136.558 105.832 128.002 97.2752L87.1154 56.3887L57.3707 86.1333L98.2573 127.02C106.814 135.576 106.814 149.446 98.2573 158.002L57.3707 198.889L87.1154 228.634L128.002 187.747C136.558 179.191 150.428 179.191 158.985 187.747L199.871 228.634L229.616 198.889L188.729 158.002C180.173 149.446 180.173 135.576 188.729 127.02L229.616 86.1333ZM143.491 225.52L113.751 255.26L143.491 285L173.231 255.26L143.491 225.52ZM256.26 112.778L226.52 142.518L256.26 172.258L286 142.518L256.26 112.778ZM0.998901 142.514L30.739 112.774L60.479 142.514L30.739 172.254L0.998901 142.514Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M113.753 29.7401L143.493 0L173.234 29.7401L143.493 59.4801L113.753 29.7401ZM229.616 86.1333L199.871 56.3887L158.985 97.2752C150.428 105.832 136.558 105.832 128.002 97.2752L87.1154 56.3887L57.3707 86.1333L98.2573 127.02C106.814 135.576 106.814 149.446 98.2573 158.002L57.3707 198.889L87.1154 228.634L128.002 187.747C136.558 179.191 150.428 179.191 158.985 187.747L199.871 228.634L229.616 198.889L188.729 158.002C180.173 149.446 180.173 135.576 188.729 127.02L229.616 86.1333ZM143.491 225.52L113.751 255.26L143.491 285L173.231 255.26L143.491 225.52ZM256.26 112.778L226.52 142.518L256.26 172.258L286 142.518L256.26 112.778ZM0.998901 142.514L30.739 112.774L60.479 142.514L30.739 172.254L0.998901 142.514Z"
          fill="url(#paint0_linear_642_4281)"
        />
        <path
          d="M143.493 0L143.847 -0.353553L143.493 -0.707107L143.14 -0.353553L143.493 0ZM113.753 29.7401L113.4 29.3865L113.046 29.7401L113.4 30.0936L113.753 29.7401ZM173.234 29.7401L173.587 30.0936L173.941 29.7401L173.587 29.3865L173.234 29.7401ZM143.493 59.4801L143.14 59.8337L143.493 60.1872L143.847 59.8337L143.493 59.4801ZM199.871 56.3887L200.225 56.0351L199.871 55.6816L199.518 56.0351L199.871 56.3887ZM229.616 86.1333L229.969 86.4869L230.323 86.1333L229.969 85.7797L229.616 86.1333ZM158.985 97.2752L158.631 96.9217L158.985 97.2752ZM87.1154 56.3887L87.4689 56.0351L87.1154 55.6816L86.7618 56.0351L87.1154 56.3887ZM57.3707 86.1333L57.0172 85.7797L56.6636 86.1333L57.0172 86.4869L57.3707 86.1333ZM98.2573 158.002L97.9037 157.649L98.2573 158.002ZM57.3707 198.889L57.0172 198.535L56.6636 198.889L57.0172 199.243L57.3707 198.889ZM87.1154 228.634L86.7618 228.987L87.1154 229.341L87.4689 228.987L87.1154 228.634ZM128.002 187.747L128.355 188.101L128.002 187.747ZM158.985 187.747L158.631 188.101L158.985 187.747ZM199.871 228.634L199.518 228.987L199.871 229.341L200.225 228.987L199.871 228.634ZM229.616 198.889L229.969 199.243L230.323 198.889L229.969 198.535L229.616 198.889ZM188.729 158.002L189.083 157.649L188.729 158.002ZM188.729 127.02L189.083 127.373L188.729 127.02ZM113.751 255.26L113.398 254.906L113.044 255.26L113.398 255.614L113.751 255.26ZM143.491 225.52L143.845 225.166L143.491 224.813L143.138 225.166L143.491 225.52ZM143.491 285L143.138 285.354L143.491 285.707L143.845 285.354L143.491 285ZM173.231 255.26L173.585 255.614L173.939 255.26L173.585 254.906L173.231 255.26ZM226.52 142.518L226.166 142.164L225.813 142.518L226.166 142.871L226.52 142.518ZM256.26 112.778L256.614 112.424L256.26 112.07L255.907 112.424L256.26 112.778ZM256.26 172.258L255.907 172.611L256.26 172.965L256.614 172.611L256.26 172.258ZM286 142.518L286.354 142.871L286.707 142.518L286.354 142.164L286 142.518ZM30.739 112.774L31.0925 112.42L30.739 112.067L30.3854 112.42L30.739 112.774ZM0.998901 142.514L0.645348 142.16L0.291795 142.514L0.645348 142.867L0.998901 142.514ZM60.479 142.514L60.8326 142.867L61.1861 142.514L60.8326 142.16L60.479 142.514ZM30.739 172.254L30.3854 172.607L30.739 172.961L31.0925 172.607L30.739 172.254ZM143.14 -0.353553L113.4 29.3865L114.107 30.0936L143.847 0.353553L143.14 -0.353553ZM173.587 29.3865L143.847 -0.353553L143.14 0.353553L172.88 30.0936L173.587 29.3865ZM143.847 59.8337L173.587 30.0936L172.88 29.3865L143.14 59.1266L143.847 59.8337ZM113.4 30.0936L143.14 59.8337L143.847 59.1266L114.107 29.3865L113.4 30.0936ZM199.518 56.7422L229.262 86.4869L229.969 85.7797L200.225 56.0351L199.518 56.7422ZM159.338 97.6288L200.225 56.7422L199.518 56.0351L158.631 96.9217L159.338 97.6288ZM127.648 97.6288C136.4 106.38 150.586 106.38 159.338 97.6288L158.631 96.9217C150.27 105.283 136.717 105.283 128.355 96.9217L127.648 97.6288ZM86.7618 56.7422L127.648 97.6288L128.355 96.9217L87.4689 56.0351L86.7618 56.7422ZM57.7243 86.4869L87.4689 56.7422L86.7618 56.0351L57.0172 85.7797L57.7243 86.4869ZM98.6108 126.666L57.7243 85.7797L57.0172 86.4869L97.9037 127.373L98.6108 126.666ZM98.6108 158.356C107.362 149.604 107.362 135.418 98.6108 126.666L97.9037 127.373C106.265 135.735 106.265 149.288 97.9037 157.649L98.6108 158.356ZM57.7243 199.243L98.6108 158.356L97.9037 157.649L57.0172 198.535L57.7243 199.243ZM87.4689 228.28L57.7243 198.535L57.0172 199.243L86.7618 228.987L87.4689 228.28ZM127.648 187.394L86.7618 228.28L87.4689 228.987L128.355 188.101L127.648 187.394ZM159.338 187.394C150.586 178.642 136.4 178.642 127.648 187.394L128.355 188.101C136.717 179.74 150.27 179.74 158.631 188.101L159.338 187.394ZM200.225 228.28L159.338 187.394L158.631 188.101L199.518 228.987L200.225 228.28ZM229.262 198.535L199.518 228.28L200.225 228.987L229.969 199.243L229.262 198.535ZM188.376 158.356L229.262 199.243L229.969 198.535L189.083 157.649L188.376 158.356ZM188.376 126.666C179.624 135.418 179.624 149.604 188.376 158.356L189.083 157.649C180.722 149.288 180.722 135.735 189.083 127.373L188.376 126.666ZM229.262 85.7797L188.376 126.666L189.083 127.373L229.969 86.4869L229.262 85.7797ZM114.105 255.614L143.845 225.873L143.138 225.166L113.398 254.906L114.105 255.614ZM143.845 284.646L114.105 254.906L113.398 255.614L143.138 285.354L143.845 284.646ZM172.878 254.906L143.138 284.646L143.845 285.354L173.585 255.614L172.878 254.906ZM143.138 225.873L172.878 255.614L173.585 254.906L143.845 225.166L143.138 225.873ZM226.874 142.871L256.614 113.131L255.907 112.424L226.166 142.164L226.874 142.871ZM256.614 171.904L226.874 142.164L226.166 142.871L255.907 172.611L256.614 171.904ZM285.647 142.164L255.907 171.904L256.614 172.611L286.354 142.871L285.647 142.164ZM255.907 113.131L285.647 142.871L286.354 142.164L256.614 112.424L255.907 113.131ZM30.3854 112.42L0.645348 142.16L1.35245 142.867L31.0925 113.127L30.3854 112.42ZM60.8326 142.16L31.0925 112.42L30.3854 113.127L60.1255 142.867L60.8326 142.16ZM31.0925 172.607L60.8326 142.867L60.1255 142.16L30.3854 171.9L31.0925 172.607ZM0.645348 142.867L30.3854 172.607L31.0925 171.9L1.35245 142.16L0.645348 142.867Z"
          fill="url(#paint1_linear_642_4281)"
          mask="url(#path-1-outside-1_642_4281)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_642_4281"
            x1="55.5"
            y1="63"
            x2="172.004"
            y2="170.996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_642_4281"
            x1="64"
            y1="64"
            x2="175"
            y2="171.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
};

import { StaticImageData } from 'next/image';
import { ArrowIcon } from '../icons';
import { Image } from '../image';
import { NavigationMenuLink } from './navigation-menu';

export interface GraphQLConfCardProps {
  image: StaticImageData;
}
export function GraphQLConfCard({ image }: GraphQLConfCardProps) {
  return (
    <NavigationMenuLink href="https://graphql.org/conf/2024/" className="group w-[358px]">
      <Image alt="" {...image} width={358} height={200} />
      <strong className="mt-6 block text-xl font-medium leading-7 text-green-1000 dark:text-neutral-100">
        GraphQLConf 2024
      </strong>
      <p className="mt-4 text-sm font-medium leading-5 text-green-800 dark:text-neutral-200">
        September 10-12 | San Fransico CA
      </p>
      <p className="mt-2 text-sm font-normal leading-5 text-green-800 dark:text-neutral-200">
        The official GraphQL conference hosted by GraphQL Foundation.
      </p>
      <span className="-mx-2 mt-4 flex items-center gap-2 rounded-lg p-2 font-medium text-green-800 transition-colors group-hover:text-green-1000 dark:text-neutral-200 dark:group-hover:text-neutral-100">
        <span>Meet us at GraphQLConf 2024</span> <ArrowIcon />
      </span>
    </NavigationMenuLink>
  );
}
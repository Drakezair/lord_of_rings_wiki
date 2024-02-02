import { Button, Container, Text } from "@/components/atom";
import Image from "next/image";

export default function AboutSection(): JSX.Element {
  return (
    <Container>
      <div className="flex justify-around items-center  flex-wrap">
        <span className="max-md:mb-11" >
          <Text className="max-w-lg">
            Step into the enchanting realms of Middle-earth with ‘Rings of
            Knowledge’. Our comprehensive wiki illuminates the intricate
            tapestry of J.R.R. Tolkien’s masterpiece, The Lord of the Rings.
            From the humble Hobbits of the Shire to the towering peaks of
            Mordor, we’ve got you covered. Join us on this epic journey and
            delve deeper into the lore that has captivated millions around the
            globe.
          </Text>
          <Button className="mt-10" link="/auth/sign-in">Explore Characters</Button>
        </span>
        <Image
          src="/img/section_about.png"
          alt="hobbit"
          width={300}
          height={300}
        />
      </div>
    </Container>
  );
}

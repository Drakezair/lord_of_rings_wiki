import { validateSession } from "@/actions/auth";
import { Container, NavButton } from "@/components/atom";
import Image from "next/image";

type HeaderNavProps = {
  dark?: boolean;
};

export default async function HeaderNav({ dark }: HeaderNavProps) {
  const auth = await validateSession();
  return (
    <nav
      className={`z-30 sticky top-0 shadow-lg p-3 ${
        dark ? "bg-black" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div>
            {auth && (
              <>
                <NavButton href="/wiki/races" text="Races" />
                <NavButton href="/wiki/characters" text="Characters" />
              </>
            )}
          </div>
          <div className="flex items-center">
            {auth ? (
              <>
                <NavButton href="/wiki/favorites" text="Favorites" />
                <NavButton
                  href="/auth/sign-out"
                  className="hover:bg-secondary"
                  icon={
                    <Image
                      src="/icons/logout.png"
                      alt="logout"
                      width={18}
                      height={18}
                    />
                  }
                />
              </>
            ) : (
              <NavButton href="/auth/sign-in" text="Sign in" />
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

/* 

Dependency Inversion Principle

In this example, the HeaderNav component is a high-level module that depends on the low-level module validateSession.
To use the validateSession function, we need to import it from the auth action.
But the component doesn't need to know how the function works, just need to know how to use it.
The implementation of the function is in the action file.
Can be replaced the implementation of the function without changing the component.

*/


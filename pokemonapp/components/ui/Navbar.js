import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";



const Navbar = () => {
     const {theme } =useTheme();
    const id= Math.floor(Math.random() *100) +1;
    return (
    <div style={{
        display:"flex",
        width:"100",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"start",
        padding:"0px 20px",
        position:"sticky",
        top:0,
        left:0,
        zIndex:100,
        backgroundColor:theme?.colors.gray100.value
    }}>
      <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }
      alt="icono de la app"
      width={70}
      height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2 sm={undefined}>P</Text>
          <Text color="white" h3 sm={undefined}>okedex</Text>
        </Link>
      </NextLink>

      <Spacer css={{flex:1}}/>

      <NextLink href="/favoritos" passHref>
        <Link>
          <Text color="white" h3 sm={undefined} >
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;

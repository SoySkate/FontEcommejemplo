// // import React from "react";

// // const IndividualProduct=({product})=>{

// //     return(
// //         <div className="bg-red-800">
// //             <p>{product.id}</p>
// //             <img src={product.image} alt={`Img ${product.name}`}/>
// //             <h3>{product.name}</h3>
// //             <p>{product.description}</p>
// //         </div>
// //     );

// // }

// // export default IndividualProduct;

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
//  import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function IndividualProduct({product}) {
  return (
    <Card sx={{  width:200, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={product.image}
            //srcSet es por si no puede abrir la src pues le pone una img alternativa
            // srcSet="https://media.vandalsports.com/i/1706x960/5-2024/202459164425_1.jpg.webp"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{product.name}</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
        //   endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
        >
          {product.description}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {product.price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{product.quantityStock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}

// import * as React from 'react';
// import Button from '@mui/joy/Button';

// export default function IndividualProduct({product}) {
//   return <Button variant="solid">Hello world</Button>;
// }

import * as React from 'react';

// import clientPromise from '../lib/mongodb'
//
// export async function getServerSideProps(context) {
//     try {
//
//         await clientPromise
//         // `await clientPromise` will use the default database passed in the MONGODB_URI
//         // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//         //
//         // `const client = await clientPromise`
//         // `const db = client.db("myDatabase")`
//         //
//         // Then you can execute queries against your database like so:
//         // db.find({}) or any of the MongoDB Node Driver commands
//
//         return {
//             props: {isConnected: true},
//         }
//     } catch (e) {
//         console.error(`mamad ${e}`)
//         return {
//             props: {isConnected: false},
//         }
//     }
//
// }

export default function Home2(props) {
    // const {} = props;
    // const isConnected = props.isConnected;
    //
    // const theme = useTheme();
    //
    // const {state, dispatch} = useContext(SkeletonContext);
    //
    // return (
    //     <>
    //         <Head>
    //             <title>Home</title>
    //             <meta name="description" content="Generated by create next app"/>
    //             <meta name="viewport" content="width=device-width, initial-scale=1"/>
    //             <link rel="icon" href="/favicon.ico"/>
    //         </Head>
    //         <Box
    //             height={`calc( 100vh - ${56}px - 2*${state.padding} - 5px )`}
    //             sx={{
    //                 flexGrow: 1,
    //                 overflow: "auto",
    //             }}
    //         >
    //
    //             <Grid
    //                 container
    //                 style={{
    //                     // backgroundImage: `url(${SocrateImage.src})`,
    //                     // backgroundRepeat: "no-repeat",
    //                     // backgroundPosition: "center",
    //                     // backgroundSize: "cover",
    //                     borderRadius: 10,
    //
    //                     width: '100%',
    //                     height: '100%',
    //                     position: "relative",
    //                 }}
    //                 // className={styles.leftSideImage}
    //             >
    //                 <Image
    //                     src={SocrateImage.src}
    //                     fill
    //                     alt={"leftsideimage"}
    //                     style={{
    //                         borderRadius: 10
    //                     }}
    //                 />
    //
    //                 <Grid
    //                     item
    //                     padding={2}
    //                     margin={1}
    //
    //                     sx={{
    //                         display: "flex",
    //                         flexDirection: "column",
    //                     }}
    //                     xs={12}
    //                     sm={12}
    //                     md={"auto"}
    //                     lg={"auto"}
    //                     style={{
    //                         background: alpha(theme.palette.background.default, 0.15),
    //                         backdropFilter: "blur(4.5px)",
    //                         borderWidth: "5px",
    //                         border: "solid",
    //                         borderColor: alpha(theme.palette.background.default, 0.1),
    //                         borderRadius: "10px"
    //
    //
    //                     }}
    //                 >
    //                     <Typography variant={"h3"} component={"h1"}>
    //                         <span style={{color: theme.palette.primary.main}}><b>Welcome</b> </span><br/>
    //                         To My Page
    //                     </Typography>
    //                     <Typography
    //                         sx={{flexGrow: 1, marginTop: 1, maxWidth: 400}}
    //                         color={"white"}
    //                         textalign={"justify"}
    //                         variant={"body1"} component={"h2"}
    //                     >
    //                         “If you don't get what you want, you suffer; if you get what you don't want, you suffer;
    //                         even when you get exactly what you want, you still suffer because you can't hold on to
    //                         it
    //                         forever. Your mind is your predicament. It wants to be free of change. Free of pain,
    //                         free of
    //                         the obligations of life and death. But change is law and no amount of pretending will
    //                         alter
    //                         that reality.” <b style={{color: theme.palette.secondary.main}}> - Socrates </b>
    //                     </Typography>
    //
    //                     <SubmitToBlogComponent/>
    //
    //                 </Grid>
    //             </Grid>
    //         </Box>
    //     </>
    // )
}
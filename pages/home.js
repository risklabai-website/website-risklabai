import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Head from "next/head";
import {SkeletonContext} from "../pages/_app";
import SocrateImage from "../public/static/soc_wallpaper.jpg"
import {useRouter} from "next/router";
import Image from "next/image"
// import Settings, {DefaultSettingsT} from './Settings';
// import './SlideShow.module.scss';
import {alpha, Avatar, Box, Button, Grid, Stack, Typography, useTheme} from "@mui/material";
import * as PropTypes from "prop-types";
import Link from "next/link";
import Carousel from 'react-material-ui-carousel';
import {DefaultSettingsT} from "../components/slide_show/Settings";
import {grey} from "@mui/material/colors";
import useBreakpoint from "../components/use_breakpoint";

function ProjectSectionComponent(props) {
    return <Grid xs={12} sm={6} md={6} lg={6} bgcolor={props.theme.palette.background.paper} padding={'0.75rem'}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        }}>
            <div style={{flexGrow: 1}}>
                <div style={{
                    aspectRatio: "1/1",
                    marginLeft: "auto",
                    padding: '1rem',
                    marginRight: "auto",
                }}>

                    <Avatar

                        variant={"square"}
                        sx={{
                            borderColor: props.theme.palette.text.primary,
                            borderWidth: "0.1rem",
                            borderStyle: "solid",
                            borderRadius: "0.75rem",
                            minHeight: 1,
                            minWidth: 1,
                            boxShadow: `0px 0px 10px 0px ${alpha(props.theme.palette.text.primary, 0.5)}`,
                        }}

                    >
                        <Image
                            src={props.imageSource}
                            alt={"project-section-component-image"}
                            fill
                        />
                    </Avatar>
                </div>
            </div>

            <Stack spacing={"0.5rem"}
                   sx={{
                       [props.theme.breakpoints.down('sm')]: {
                           width: '70%',
                       },
                       [props.theme.breakpoints.up('sm')]: {
                           width: '80%',
                       },
                   }}
                   style={{padding: "0.5rem"}}>
                <Typography
                    component={Link}
                    href={"/home"}
                    variant={"h5"}
                    textAlign={"left"}
                >
                    {props.title}
                </Typography>
                <Typography variant={"body2"} textAlign={"start"}>
                    {props.description}
                </Typography>
            </Stack>

        </div>

    </Grid>;
}

ProjectSectionComponent.propTypes = {theme: PropTypes.any};
export default function Home(props) {
    const {} = props;

    const router = useRouter();
    useEffect(() => {
        return () => {

            router.prefetch('/auth/sign_up').then(r => r)
            router.prefetch('/auth/sign_in').then(r => r)

            router.prefetch('/blog').then(r => r)
            router.prefetch('/about').then(r => r)

        };
    }, [router]);


    const theme = useTheme();

    const {state, dispatch} = useContext(SkeletonContext);

    console.log("theme.breakpoints.up('md')", theme.breakpoints.up('md'))

    const currentBreakpoint = useBreakpoint();

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div style={{
                // display: "flex",
                // flexDirection: "column",
                width: "100%"
            }}>
                <div style={{height: `calc(100vh)`, width: "100%",}}>
                    <Image
                        style={{
                            zIndex: -1
                        }}
                        src={SocrateImage.src}
                        fill
                        alt={"background-welcome-image"}
                    />

                    <Box
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",

                            /* bring your own prefixes */
                            transform: "translate(-50%, -50%)",
                        }}

                        sx={{
                            width: {
                                xs: "80%",
                                sm: "67.5%",
                                md: "55%",
                                lg: "50%"
                            },
                        }}
                    >

                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                style={{
                                    backdropFilter: "blur(1.5px)",
                                }}
                            >
                                <div style={{
                                    aspectRatio: "2/1",
                                    marginLeft: "auto",
                                    padding: '1rem',
                                    marginRight: "auto",
                                }}>
                                    <Image src={'/static/quant_econ.png'} alt={'label'} fill/>
                                </div>
                            </Grid>

                            <Grid
                                item
                                padding={2}

                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                            >
                                <Typography
                                    color={'white'}
                                    variant={"h2"}
                                    textAlign={"center"}
                                    fontFamily={'monospace'}
                                >
                                    RiskLab<b>AI</b>
                                </Typography>
                                <Typography
                                    style={{
                                        background: alpha(theme.palette.background.default, 0.35),

                                    }}

                                    color={'white'} bgcolor={"red"} variant={"h5"} textAlign={"center"}>
                                    Open source code for <b>Finance</b> modeling
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>

                </div>

                <Grid container paddingY={'4rem'} bgcolor={"#0878a8"}>
                    <Grid item xs={12} sm={6} md={6} lg={6} bgcolor={"gray"} padding={'2rem'}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'start'
                        }}>
                            <div style={{width: '30%',}}>
                                <div style={{
                                    width: '80%',
                                    aspectRatio: '1/1',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                    backgroundColor: 'red',
                                }}>
                                    [Lectures-Label]
                                </div>
                            </div>

                            <Stack spacing={'0.5rem'}
                                   style={{width: '70%', backgroundColor: "darkgrey", padding: '0.5rem'}}>
                                <Typography variant={"h4"} textAlign={"left"}>
                                    Lectures
                                </Typography>
                                <Typography variant={"body2"} textAlign={"start"}>
                                    QuantEcon hosts lecture series on economics, finance, econometrics and data science.
                                    All lecture series are based on open source languages and open computing
                                    environments.
                                </Typography>
                                <Button padding={0} variant={"contained"}>
                                    Browse lectures
                                </Button>
                            </Stack>

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} bgcolor={"white"} padding={'2rem'}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'start'
                        }}>
                            <div style={{width: '30%',}}>
                                <div style={{
                                    width: '80%',
                                    aspectRatio: '1/1',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                    backgroundColor: 'red',
                                }}>
                                    [Lectures-Label]
                                </div>
                            </div>

                            <Stack spacing={'0.5rem'}
                                   style={{width: '70%', backgroundColor: "darkgrey", padding: '0.5rem'}}>
                                <Typography variant={"h4"} textAlign={"left"}>
                                    Code Libraries
                                </Typography>
                                <Typography variant={"body2"} textAlign={"start"}>
                                    QuantEcon has developed and maintains high-performance, open source, code libraries
                                    in Python and Julia.
                                </Typography>
                                <Button padding={0} variant={"contained"}>
                                    View libraries
                                </Button>
                            </Stack>

                        </div>

                    </Grid>
                </Grid>

                <Grid container paddingY={'4rem'} bgcolor={"#00b2ff"}>
                    <Grid item xs={12} sm={6} md={6} lg={6} bgcolor={"white"} padding={'2rem'}>

                        <div style={{width: '100%',}}>
                            <div style={{
                                width: '80%',
                                aspectRatio: '1/1',
                                marginLeft: 'auto',
                                marginRight: 'auto',

                                backgroundColor: 'red',
                            }}>
                                [workshop image]
                            </div>
                        </div>


                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} bgcolor={"grey"} padding={'2rem'}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'start'
                        }}>
                            <Stack spacing={'0.5rem'}
                                   style={{width: '90%', backgroundColor: "darkgrey", padding: '0.5rem'}}>
                                <Typography variant={"h4"} textAlign={"left"}>
                                    Workshop
                                </Typography>
                                <Typography variant={"body2"} textAlign={"start"}>
                                    QuantEcon runs remote and in-person workshops and short courses on quantitative
                                    economics and high-performance computing using Python and Julia.
                                    <br/>
                                    <br/>

                                    Past locations include the Econometric Society meetings, Columbia University,
                                    Copenhagen, the Reserve Bank of Australia, Stanford, Princeton, Harvard, MIT,
                                    Berkeley, UCLA, Paris and the Central Bank of Chile.

                                </Typography>
                                <Button padding={0} variant={"contained"}>
                                    Contact us
                                </Button>
                            </Stack>

                        </div>

                    </Grid>
                </Grid>

                <Grid container bgcolor={"grey"} paddingY={'4rem'} paddingX={'4rem'}>
                    <Grid item xs={12} sm={12} md={12} lg={12} padding={'0.75rem'}>
                        <Typography variant={"h3"} textAlign={"center"}>
                            Projects
                        </Typography>
                    </Grid>


                    <ProjectSectionComponent
                        key={"1"}
                        imageSource={"/static/lectures.png"}
                        title={"Lectures Series"}
                        description={"QuantEcon hosts lecture series on economics, finance, econometrics and data science."}
                        theme={theme}

                    />


                    <ProjectSectionComponent
                        key={"2"}
                        imageSource={"/static/lectures.png"}
                        title={"Code"}
                        description={"QuantEcon has developed and maintains high-performance, open source, code libraries in Python and Julia."}
                        theme={theme}

                    />


                    <ProjectSectionComponent
                        key={"3"}
                        imageSource={"/static/lectures.png"}
                        title={"Textbooks"}
                        description={"A series of high quality hardcopy textbooks on topics in computational economics and economic dynamics."}
                        theme={theme}
                    />


                    <ProjectSectionComponent
                        key={"4"}
                        imageSource={"/static/lectures.png"}
                        title={"QE Notes"}
                        description={"QuantEcon Notes is a platform which hosts an open Jupyter notebook library with a focus on economics and finance."}
                        theme={theme}
                    />

                    <ProjectSectionComponent
                        key={"5"}
                        imageSource={"/static/lectures.png"}
                        title={"Executable Books"}
                        description={"QuantEcon a founding member of the Executable Books Project, which develops Jupyter Book."}
                        theme={theme}
                    />

                    <Grid item xs={12} sm={12} md={12} lg={12} padding={'0.75rem'}
                          style={{
                              display: "flex",
                              justifyContent: "center"
                          }}
                    >
                        <Button variant={"contained"}>
                            View All Projects
                        </Button>
                    </Grid>
                </Grid>

                <Grid container bgcolor={"white"} paddingY={'2.25rem'} paddingX={'2rem'}>
                    <Grid item xs={12} sm={12} md={12} lg={12} padding={'1.75rem'}>
                        <Typography variant={"h3"} textAlign={"center"}>
                            Working for QuantEcon
                        </Typography>
                    </Grid>

                    {["xs", "sm", "md"].includes(currentBreakpoint) ? <SlideShow theme={theme}/> :
                        <Grid container spacing={1}>
                            <Grid item md={4} lg={4}>
                                <WorkersComponent theme={theme}/>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <WorkersComponent theme={theme}/>
                            </Grid>
                            <Grid item md={4} lg={4}>
                                <WorkersComponent theme={theme}/>
                            </Grid>
                        </Grid>
                    }


                    <Grid item xs={12} sm={12} md={12} lg={12} padding={'0.75rem'}
                          marginTop={'0.5rem'}
                          style={{
                              display: "flex",
                              justifyContent: "center"
                          }}
                    >
                        <Button variant={"contained"}>
                            View all positions
                        </Button>
                    </Grid>
                </Grid>

            </div>

        </>
    )
}


const SlideShow = ({myPrinciples, theme}) => {

    const [settings, setSettings] = useState(DefaultSettingsT);

    return (
        <Carousel
            sx={{
                margin: 0,
                padding: 0,
                width: '100%',
                backgroundColor: grey.A400,
            }}
            height={`calc( 70vh )`}
            {...settings}
            // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
            // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
            // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
            //
            // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
            // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
            // indicatorContainerProps={{style: {margin: "20px"}}}
            // NextIcon='next'
        >
            <DesktopBanner theme={theme}/>
            <DesktopBanner theme={theme}/>
            <DesktopBanner theme={theme}/>
            <DesktopBanner theme={theme}/>

        </Carousel>
    );
}
const DesktopBanner = ({theme}) => {

    return (
        <Grid container padding={'2rem'}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <WorkersComponent theme={theme}/>
            </Grid>
        </Grid>

    )
}


const WorkersComponent = ({theme,}) => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center"
            }}>
                <div style={{
                    width: "25%",
                }}>
                    <div style={{
                        padding: "1rem",
                        aspectRatio: "1/1",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}>
                        <Avatar

                            variant={"circular"}
                            sx={{
                                borderColor: theme.palette.text.primary,
                                borderWidth: "0.15rem",
                                borderStyle: "solid",
                                minHeight: 1,
                                minWidth: 1,
                                boxShadow: `0px 0px 10px 0px ${alpha(theme.palette.text.primary, 0.5)}`,
                            }}

                        >
                            <Image
                                src={"/static/me2.png"}
                                alt={"project-section-component-image"}
                                fill
                            />
                        </Avatar>

                    </div>
                </div>

                <Stack
                    spacing={"0.5rem"}
                    width={"auto"}
                    style={{
                        backgroundColor: "grey", padding: "0.5rem"
                    }}
                >
                    <Typography variant={"h5"} textAlign={"start"}>
                        S.Alireza Mousavizade
                    </Typography>
                    <Typography variant={"body1"} textAlign={"start"}>
                        Research Assistant
                    </Typography>
                </Stack>
            </div>

            <Typography variant={"body1"} padding={"1rem"} textAlign={"justify"}>
                Flint is a QuantEcon research assistant and student in Economics at Stanford University. His primary
                interest is in macro-finance and mathematical economics. Flint is working to understand the nature
                of
                default and debt as amplification mechanisms in the macroeconomy. He is also a research assistant
                for
                QuantEcon and was Professor Stachurski's Honours student at the ANU.
            </Typography>
        </>
    );
}

WorkersComponent.propTypes = {palette: PropTypes.any};




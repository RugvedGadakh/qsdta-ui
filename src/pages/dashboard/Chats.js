import React from 'react';
import { Box, IconButton, Typography, Stack, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data';
// import SimpleBarStyle from "../../components/Scrollbar"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            borderRadius: 1,
            margin: 1,
        }}
            p={2}
        >
            <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    {online ? <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={faker.image.avatar()} />

                    </StyledBadge> : <Avatar src={faker.image.avatar()} />}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">
                            {name}
                        </Typography>
                        <Typography variant="caption">
                            {msg}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center">
                    <Button variant="contained" color="primary" size="small">
                        Connect
                    </Button>
                </Stack>

            </Stack>

        </Box>
    )
}

const Search = styled("div")(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(${theme.spacing(4)})`, // Fixed paddingLeft calculation
        width: "100%",
    },
}));

const Chats = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
            }}>
            <Stack p={5} spacing={2} sx={{ height: "100vh", }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h5'>Chats</Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack marginTop={1} sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709CE6' />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." />
                    </Search>
                </Stack>
                <Stack>
                    <Stack direction="row" alignItems={"center"} spacing={1.5} marginTop={2} marginBottom={0.5} >
                        <ArchiveBox size={24} />
                        <Button sx={{ width: "100%" }}>Archive</Button>
                    </Stack>
                    <Divider />
                </Stack>

                <Stack spacing={2} direction="column" sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
                    {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
                    <Stack spacing={2.4}>
                        <Typography variant='subtitle2' sx={{ color: "#676767 " }}>Pinned</Typography>
                        {ChatList.filter((el) => el.pinned).map((el) => {
                            return <ChatElement {...el} />
                        })}

                    </Stack>
                    <Stack spacing={2.4}>
                        <Typography variant='subtitle2' sx={{ color: "#676767 " }}>All Chats</Typography>
                        {ChatList.filter((el) => !el.pinned).map((el) => {
                            return <ChatElement {...el} />
                        })}

                    </Stack>
                    {/* </SimpleBarStyle> */}

                </Stack>
            </Stack>
        </Box>
    );
};

export default Chats;

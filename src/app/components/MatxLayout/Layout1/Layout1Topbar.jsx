import React from 'react'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery, 
    Hidden,
} from '@material-ui/core'
import { MatxMenu } from 'app/components'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import useSettings from 'app/hooks/useSettings'
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

/**
 * This is our top-bar 
 * @author MatX Template
 * @author Jill 
 */ 

// styling for the top-bar
const useStyles = makeStyles(({ palette, ...theme }) => ({
    topbar: {
        top: 0,
        zIndex: 96,
        transition: 'all 0.3s ease',
        background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))',

        '& .topbar-hold': {
            backgroundColor: palette.primary.light,
            height: 80,
            paddingLeft: 18,
            paddingRight: 20,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 16,
                paddingRight: 16,
            },
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 14,
                paddingRight: 16,
            },
        },
        '& .fixed': {
            boxShadow: theme.shadows[8],
            height: 64,
        },
    },
    // styling for drop-down user menu
    userMenu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 24,
        padding: 4,
        '& span': {
            margin: '0 8px',
            color: palette.text.primary
        },
    },
    // styling for each menu item
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 185,
    },
}))

// main function for top bar
const Layout1Topbar = (props) => {
    const theme = useTheme()
    const classes = useStyles()
    const { settings, updateSettings } = useSettings()
    const { logout, user } = useAuth()
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))
    const fixed = settings?.layout1Settings?.topbar?.fixed

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings
        let mode

        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
        }

        updateSidebarMode({ mode })
    }

    // html for top bar
    return (
        <div className={classes.topbar}>
            <div className={clsx({ 'topbar-hold': true, fixed: fixed })}>
                <div className="flex justify-between items-center h-full">
                    <div className="flex">
                        {/* drop-down menu icon */}
                        <IconButton
                            onClick={handleSidebarToggle}
                            className="hide-on-pc"
                        >
                        </IconButton>
                    </div>
                    <div>
                    {/* Our welcome message in the middle of top-bar */}
                    <Hidden xsDown>
                        <span> 
                              {/* props.class grabs the graduating class the user input on login page */}
                        <strong> Colorado College Class of {props.class} GroupChat!</strong>
                        </span>
                    </Hidden>
                    </div>
                    <div className="flex items-center">
                         {/* far right of the top-bar – greets the user */}
                        <MatxMenu
                            menuButton={
                                <div className={classes.userMenu}>
                                    <Hidden xsDown>

                                         {/* props.username grabs the name the user input on login page */}
                                        <span>
                                            <strong> Hi, {props.username}!</strong>
                                        </span>
                                    </Hidden>
                                 
                                </div>
                            }
                        >
                             {/* drop-down menu under where the user is greeted */}
                             {/* includes logout option which redirects user back to our login page */}
                            <MenuItem
                                onClick={() => Auth.signOut()}
                                className={classes.menuItem}
                            >
                                 <Icon> power_settings_new </Icon>
                                 <AmplifySignOut />
                            </MenuItem>
                        </MatxMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Layout1Topbar)

import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React from "react";

export const navTabs = ['About', 'Skills', 'Experience', 'Interest'];
export const redirectTabs = ['LinkedIn', 'GitHub', 'Instagram'];
export const iconMap = {
    'About': <InfoIcon/>,
    'Skills': <WorkIcon/>,
    'Experience': <InboxIcon/>,
    'Interest': <CheckCircleIcon/>
}
export const linkMap = {
    'LinkedIn': "https://www.linkedin.com/in/abheepsa-pattnaik-a23706b4",
    'GitHub': "https://github.com/abheepsapattnaik?tab=repositories",
    'Instagram': "https://www.instagram.com/abheepsapattnaik/?hl=en"
}
import Image from "next/image";
import teamsIcon from "@/app/assets/icons/teams.svg";
import slackIcon from "@/app/assets/icons/slack.svg";

export const TeamsIcon = () => {
    return (
        <Image src={teamsIcon} alt="Microsoft Teams" width={24} height={24} />
    )
}

export const SlackIcon = () => {
    return (
        <Image src={slackIcon} alt="Slack" width={24} height={24} />
    )
}
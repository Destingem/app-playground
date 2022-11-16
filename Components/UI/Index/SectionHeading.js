import { Text, useMantineTheme } from "@mantine/core";

export default function SectionHeading(props){
    let styles = useMantineTheme()
    return(
        <Text component="h2" size={props.big ? "5rem" : "4rem"} color={props.color? props.color : "#281C64"}>{props.children}</Text>
    )
}
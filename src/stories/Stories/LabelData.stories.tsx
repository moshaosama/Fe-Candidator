import LabelData from "../../Components/LabelData";

const meta =  {
    title: "Data/LabelData",
    component: LabelData,

    argTypes: {
        color: { control: "color" }
    }
}


export default meta;



export const labelData = {
    args: {
        labels: [
            {name: "First Name"},
            {name: "Last Name"},
            {name: "Email"},
            {name: "Role"},
            {name: "Status"},
            {name: "Action"},
        ],
        color: "red",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        margin:"10px"
    }
}

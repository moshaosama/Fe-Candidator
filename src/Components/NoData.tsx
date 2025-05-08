interface NoDataProps {
    Title: string;
}


const NoData = ({Title}: NoDataProps) => {
    return (
        <p className="text-center mt-10 text-xl font-semibold text-gray-500">No {Title} added yet.</p>
    )
}

export default NoData;

export const Wrapper = ({title, subTitle, children}) => {
    return (
        <>
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <div>{children}</div>
        </div>
        </>
    )
}
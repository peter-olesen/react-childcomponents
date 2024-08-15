import style from "./Card.module.scss"

export const Card = ({ children }) => {

    return (
        <div className={style.Card}>
            {children}
        </div>
    )
}

export const CardHeader = ({ CardTitle = "Default Header" }) => {
    return (
        <h2>{CardTitle}</h2>
    )
}

export const CardImage = ({ ImageURL = "Default Content" }) => {
    return (
        <img src={ImageURL} />
    )
}

export const CardContent = ({ CardText = "Default Content" }) => {
    return (
        <p>{CardText}</p>
    )
}

export const CardFooter = ({ CardCTA = "Default Footer Text" }) => {
    return (
        <h2>{CardCTA}</h2>
    )
}

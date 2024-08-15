import style from "./CardMap.module.scss"

import data from '../../assets/data/carddata.json'
import { Card, CardHeader, CardImage, CardContent, CardFooter } from '../Card/Card'

export const CardMap = () => {
    return (
        <>
            {data.map((data, index) => (
                <Card key={index}>
                    <CardHeader CardTitle={data.Title} />
                    <CardContent CardText={data.TextContent} />
                    <CardImage ImageURL= {data.Image} />
                    <CardFooter CardCTA={data.FooterContent} />
                </Card>
            ))}
        </>
    )
}
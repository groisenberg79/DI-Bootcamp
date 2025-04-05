import data from '../List.json';

const Example1 = () => {
    return(
        <ul>
            {data.SocialMedias.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

export default Example1;
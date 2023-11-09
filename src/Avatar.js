export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQDOfPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img classname="avatar"
            src={avatar}
            alt={description}
        />
    );
}


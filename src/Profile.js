function Avatar()
{
    return(
        <img className="Avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}

export default function Profile(){
    return(
        <avatar 
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
            size={100}
        />
    );
}
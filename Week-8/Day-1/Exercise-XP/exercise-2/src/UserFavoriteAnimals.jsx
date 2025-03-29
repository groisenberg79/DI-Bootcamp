const UserFavoriteAnimals = (props) => {
     const animals = props.favAnimals.map((animal, index) => (
        <li key={index} >{animal}</li>
     ))

     return(
        <ul>{ animals }</ul>
     )
}

export { UserFavoriteAnimals };
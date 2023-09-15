export default function SearchBar () {

    const searchBarStyle = {
        width: '600px',
        border: '2px solid black',
        borderRadius: '20px',
        padding: '10px 15px'
    }

    return (
        <input type= 'text' placeholder="Watchu lookin foe?" style= {searchBarStyle} />
    )
}
import './UserCard.css'

export default function UserCard () {
    return (
        <div className='user-card'>
            <img src= 'https://dappradar.com/blog/static/20d7983b3af85806030995fcd2b89674/8bd54/dappradar.com-degods-everything-you-need-to-know-about-the-nft-collection-y00ts-nfts-are-tied-to-the-degods-ecosystem.png'
                 alt= 'music wave'
                 style= {{width: '50%', borderRadius: '5%', border: '1px solid #7e7e7e'}} />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}
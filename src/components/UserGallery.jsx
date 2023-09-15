import UserCard from './UserCard/UserCard'

export default function UserGallery (props) {

    const userGalleryStyle= { display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'space-around', 
                           flexWrap: 'wrap', 
                           padding: '40px 0px',  
                        }

    return (
        <div style= {{...userGalleryStyle, ...props.textStyle}}>
            <h1>Gallery</h1>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
        </div>
    )
}
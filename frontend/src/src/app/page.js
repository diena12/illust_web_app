import LoginLinks from '@/app/LoginLinks'
import UserHeader from '@/components/user/UserHeader'
import Categories from '@/components/user/Categories'


export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <UserHeader />
            <Categories />
        </>
    )
}

export default Home

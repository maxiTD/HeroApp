import { HeroList } from "../hero/HeroList"


export const DCScreen = () => {
    return (
        <div>
        <h1>DC Screen</h1>
        <hr />

            <HeroList publisher={ 'DC Comics' } />
        </div>
    )
}

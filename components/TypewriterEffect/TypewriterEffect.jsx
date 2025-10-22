import Typewriter from 'typewriter-effect';


const TypewriterEffect = () => {
    return (
        <Typewriter
            options={{
                strings: ['front-end web developer', 'back-end web developer', 'full stack web developer', 'graphic designer', 'ui/ux'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default TypewriterEffect
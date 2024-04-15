export const Lectura = ({entrada}) => {
    const chorizos = entrada.split(' ')
    let tiempo = 300
    let animationDelay = ` ${tiempo} + 'ms'`
    return chorizos.map((chorizo) => {
        animationDelay = ` ${tiempo}ms `
        tiempo += 100
        return(
            <span class="animate-fade-left" style={{animationDelay}} >
                {chorizo.concat(' ')}
            </span>
        )
    })
}
import React from 'react'

const Skills = () => {
  return (
    <div className="container p-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
                <p className="text-gray-500 pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est doloribus autem temporibus minima qui in quos? Accusamus magnam sapiente est quas aut alias. Placeat, optio a non accusantium officiis minus?</p>
            </div>

            <div>
                <div className="grid grid-cols-2 font-bold text-gray-300 text-3xl sm:text-4xl">
                    <div className="space-y-2">
                        <h2>Next.js</h2>
                        <h2>React.js</h2>
                        <h2>Node.js</h2>
                        <h2>MongoDB</h2>
                    </div>
                    <div className="space-y-2">
                        <h2>TypeScript</h2>
                        <h2>JavaScript</h2>
                        <h2>CSS</h2>
                        <h2>Tailwind</h2>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
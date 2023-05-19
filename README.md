# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





import React from 'react'

const Freelance = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='max-w-md mx-auto'>
            <h1 className='px-5 md:h-24 pt-2 font-cormorant text-2xl leading-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-green-700 text-center md:text-5xl md:font-extrabold'>
                I occasionally take on
            </h1>
            <h1 className='h-24 -mt-5 pt-2 font-cormorant text-2xl leading-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-green-700 text-center md:text-5xl'>
             freelance opportunities.
            </h1>
            <h3 className='text-center text-white font-arwo text-lg md:text-xl'>
                Have an exciting project where you need some help?
            </h3>
            <h3 className='text-center text-white font-arwo text-lg md:text-xl'>
                Send me over a message, and <span className='underline'> <a href="">let's chat.</a></span>
            </h3>
            </div>
           
        </section>
    )
}

export default Freelance



 <div className='chat-history h-96 flex-grow flex-shrink overflow-y-scroll' ref={messagesContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            onClick={() => HandleMessageClick(message)}
            className={`message p-3 bg-primary-75 rounded-lg mt-3 ${index % 2 === 0 ? 'left' : 'right'}`}
          > <button >
            {message}

          </button>
          </div>
        ))}
      </div>


      

<div className="flex flex-row space-x-2">
              <div className="flex flex-col">
                
                {props.messages.map((message, index) => (
                  <div className="flex items-center justify-start p-2 text-gray-400 bg-slate-900 rounded-md" key={index}  onClick={() => HandleMessageClick(message)}>
                  <button>
                    {message}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                {messages.slice(props.messages.length).map((message, index) => (
                  <div className="flex items-center justify-end p-2 text-gray-400 bg-slate-900 rounded-md" key={index}  onClick={() => HandleMessageClick(message)}>
                  <button>
                    {message}
                     </button>
                  </div>
                ))}
              </div>
            </div>
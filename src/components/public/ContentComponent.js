import React from 'react'

class ContentComponent extends React.Component {




    render() {

        const data = {
            'image': 'https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium'
        }

        return (
            <>
                <section>
                    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                        style={{
                            minHeight: "75vh"
                        }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')"
                            }}>
                            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <div className="pr-12">
                                        <h1 className="text-white font-semibold text-5xl">
                                            Oatwant Studio
                                        </h1>
                                        <p className="mt-4 text-lg text-gray-300">
                                            บล็อคนี้จัดทำขึ้นมาโดยไม้ได้ตั้งใจ โปรดอย่าคาดหวังหาความรู้่ ทั้งหมด อาจจะไม่มีความรู้เลยยก็เป็นไปได้ โปรดใช้ วิจารณาญาณในการเสพสื่ออย่างเหมาะสม โดยบางครั้งอาจจะแฝงเนื้อหาที่มีประโยชน์ไว้ โปรดเลือกอ่านดีๆ
                                            <li>
                                                technologies 💻 foods 🍛  travel 🏝
                                            </li>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: "100px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-white fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>
                    </div>
                </section>

                <section className="bg-white mt-10">
                    <div className="container my-12 mx-auto px-4 md:px-12 ">
                        <div className="text-center text-lg text-5xl">
                            <h1>บทความใหม่</h1>
                            <hr />
                        </div>

                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {[...Array(10)].map((x, i) =>
                                <div key={i} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 px-5">
                                    <div className=" dark:bg-black flex flex-warp items-center justify-center">
                                        <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
                                            <div className="flex justify-between">
                                                <div className="flex items-center">
                                                    <img className="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg" alt="test" />
                                                    <div className="ml-1.5 text-sm leading-tight">
                                                        <span className="text-black dark:text-white font-bold block ">Visualize Value</span>
                                                        <span className="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                                                    </div>
                                                </div>
                                                <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /></g></svg>
                                            </div>
                                            <p className="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
                                            <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium" alt="test" />
                                            <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                                            <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1" />
                                            <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                                                <div className="flex items-center mr-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    <span className="ml-3"> View 615</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* viewBox="2560 1000 -2560 100" */}
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="1000 100 -2560 100"
                            x="0"
                            y="0"
                            className="absolute left-0 w-full block"
                            style={{
                                height: "180px",
                                top: "-100px",
                            }}
                        >
                            {/* points="2560 0 2560 100 0 100"*/}
                            <polygon
                                points="-10 10 1600 100 0 1500"
                                className="text-blue-400 fill-current"
                            ></polygon>
                        </svg>
                    </blockquote>
                </section>

                <section className="bg-blue-400 " style={{ minHeight: "100vh" }}>
                    <div className="pt-10 container mx-auto pb-20">
                        <div className="text-3xl text-center text-white">
                            <h1 className="mb-2">บทความที่ได้รับความนิยม 👑</h1>
                        </div>


                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {[...Array(6)].map((x, i) =>
                                <div key={i} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 px-5">
                                    <div className=" dark:bg-black flex flex-warp items-center justify-center">
                                        <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
                                            <div className="flex justify-between">
                                                <div className="flex items-center">
                                                    <img className="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg" alt="test" />
                                                    <div className="ml-1.5 text-sm leading-tight">
                                                        <span className="text-black dark:text-white font-bold block ">Visualize Value</span>
                                                        <span className="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
                                                    </div>
                                                </div>
                                                <svg className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /></g></svg>
                                            </div>
                                            <p className="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
                                            <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium" alt="test" />
                                            <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
                                            <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1" />
                                            <div className="text-gray-500 dark:text-gray-400 flex mt-3">
                                                <div className="flex items-center mr-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    <span className="ml-3"> View 615</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="2000 0 -2560 100"
                            x="0"
                            y="0"
                            className="absolute left-0 w-full block"
                            style={{
                                height: "180px",
                                top: "-30px"
                            }}
                        >
                            {/* points="2560 0 2560 100 0 100"*/}
                            <polygon
                                points="1500 0 2560 100 -100 100"
                                className="text-white fill-current"
                            ></polygon>
                        </svg>
                    </blockquote>
                </section>

                <section className="bg-white">
                    <div className="container my-12 mx-auto">
                        <div className="text-center text-4xl">
                            <p>รายละเอียด</p>
                        </div>

                    </div>
                </section>

                <footer className="relative bg-gray-300 pt-8 pb-6">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full px-4">
                                <h4 className="text-3xl font-semibold">
                                    Tag
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-gray-700">

                                </h5>

                            </div>

                            <div className="xl:w-6/12 lg:w-6/12 w-full px-4">
                                <h4 className="text-left  lg:text-right  text-3xl font-semibold">
                                    Social media
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-gray-700">

                                </h5>
                            </div>

                        </div>
                        <hr className="my-6 border-gray-400" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-gray-600 font-semibold py-1">
                                    Copyright © {new Date().getFullYear()}{" "}
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        Oantwant Studio
                                    </a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </>
        )
    }
}

export default ContentComponent
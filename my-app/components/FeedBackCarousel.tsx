import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import userProfile from "@/public/userProfile.png";
import Image from "next/image";

export function FeedBackCarousel() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                <CarouselItem>
                    <Card>
                        <CardContent>
                            <div>
                                <p>
                                    This platform is game-changer! Now i'm
                                    totaly rich ! Thanks a lot for this
                                    software.
                                </p>
                                <div className="flex">
                                    <Image
                                        src={userProfile}
                                        alt="Profile"
                                        className="w-20"
                                    />
                                    <div className="mt-4">
                                        <p>Casey Bach</p>
                                        <p>Founder, Laravel</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card>
                        <CardContent>
                            <div>
                                <p>
                                    This software has revolutionized my
                                    workflow! I'm now more productive than ever.
                                    Kudos to the team!
                                </p>
                                <div className="flex">
                                    <Image
                                        src={userProfile}
                                        alt="Profile"
                                        className="w-20"
                                    />
                                    <div className="mt-4">
                                        <p>Ava Thompson</p>
                                        <p>CEO, Tech Innovators</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>

                <CarouselItem>
                    <Card>
                        <CardContent>
                            <div>
                                <p>
                                    I can't believe how easy it was to set up
                                    and start using. It's like having a personal
                                    assistant!
                                </p>
                                <div className="flex">
                                    <Image
                                        src={userProfile}
                                        alt="Profile"
                                        className="w-20"
                                    />
                                    <div className="mt-4">
                                        <p>Ethan Lee</p>
                                        <p>CTO, Data Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>

                <CarouselItem>
                    <Card>
                        <CardContent>
                            <div>
                                <p>
                                    The customer support is top-notch. They
                                    helped me every step of the way. Highly
                                    recommend!
                                </p>
                                <div className="flex">
                                    <Image
                                        src={userProfile}
                                        alt="Profile"
                                        className="w-20"
                                    />
                                    <div className="mt-4">
                                        <p>Sophia Martinez</p>
                                        <p>
                                            Marketing Director, GreenThumb Co.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

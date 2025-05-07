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
                                <Image
                                    src={userProfile}
                                    alt="Profile"
                                    className="w-20"
                                />
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

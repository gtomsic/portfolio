import React, { Component } from "react";
import AdminCardItem from "../components/admin/AdminCardItem";

export class DashboardHome extends Component {
    render() {
        return (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                <AdminCardItem color="bg-primary-dark text-lighter gap-2 p-3 font-bold">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
                        MESSAGES
                    </h3>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">1</div>
                        <div className="text-gray">Unread Messages</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">2</div>
                        <div className="text-gray">Read Messages</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">3</div>
                        <div className="text-gray">Total Messages</div>
                    </div>
                </AdminCardItem>
                <AdminCardItem color="bg-primary-dark text-lighter gap-2 p-3 font-bold">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
                        PROPJECTS
                    </h3>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">1</div>
                        <div className="text-gray">Publish</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">2</div>
                        <div className="text-gray">Unpublish</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">3</div>
                        <div className="text-gray">Total Publish</div>
                    </div>
                </AdminCardItem>
                <AdminCardItem color="bg-primary-dark text-lighter gap-2 p-3 font-bold">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
                        BLOGS
                    </h3>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">1</div>
                        <div className="text-gray">Publish</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">2</div>
                        <div className="text-gray">Unpublish</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">3</div>
                        <div className="text-gray">Publish</div>
                    </div>
                </AdminCardItem>
                <AdminCardItem color="bg-primary-dark text-lighter gap-2 p-3 font-bold">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
                        VISITORS
                    </h3>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">193</div>
                        <div className="text-gray">VISITORS</div>
                    </div>
                </AdminCardItem>
                <AdminCardItem color="bg-primary-dark text-lighter gap-2 p-3 font-bold">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
                        REVIEWS
                    </h3>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">4.5</div>
                        <div className="text-gray">REVIEWS</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-3 text-accent">300</div>
                        <div className="text-gray">TOTAL REVIEWS</div>
                    </div>
                </AdminCardItem>
            </div>
        );
    }
}

export default DashboardHome;

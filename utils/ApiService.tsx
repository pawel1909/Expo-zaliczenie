import axios from "axios";

import Events from "../interfaces/Events";
import MarkedDates from "../interfaces/MarkedDate";
import React, { useState } from "react";

class ApiService
{
    private apiURL: string;

    constructor(apiURL: string)
    {
        this.apiURL = apiURL;
    }

    public getData()
    {
        return fetch(`${this.apiURL}`)
            .then(response => response.json())
            .catch(error => `Bład: ${error}`);
    }

    public fetchData(setData: React.Dispatch<React.SetStateAction<Events[] | null>>)
    {
        this.getData().then(data => setData(data));
    }


    public markedForCalendar(): Promise<MarkedDates>
    {
        return this.getData().then(events => {
            const markedDates = this.markEventsOnCalendar(events);
            return markedDates;
        });
        
    }

    private markEventsOnCalendar(events: Events[]): MarkedDates
    {
        return events.reduce((acc: any, event: Events) => {
            const key = this.formatDate(event.date);
            acc[key] = {marked: true, dotColor: 'red', event: event};
            return acc;
        }, {})
    }

    private formatDate(date: string): string
    {
        const eventDate = new Date(date);
        const d = new Date();
        const month = eventDate.getMonth() + 1, day = eventDate.getDate();
        return `${d.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }
}

export default ApiService;
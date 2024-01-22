import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Appointments } from "../models/Appointments";
import { randomUUID } from "node:crypto";
@Resolver()
export class AppointmentsResolver {
    private data: Appointments[] = []; 
    
    @Query(() => [Appointments])
    async appointments() {
        return this.data
    }

    @Mutation(() => Appointments)
    async createAppointments(
        @Arg('name') name: string
    ){
        const appointments = {id : randomUUID(), name: name}
        this.data.push(appointments)
        return appointments;
    }
}
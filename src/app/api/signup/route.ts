import {connect} from '@/lib/db';
import User from '@/lib/models/user.models';
import { NextResponse } from 'next/server';



export async function POST(req: any){
    try {
        await connect();
        const reqBody = await req.json();
        const {name} = reqBody;
        const newUser = new User({
          username: name
        })
        await newUser.save();
        return NextResponse.json({message: 'success'},{status: 201})
    } catch (error) {
        return NextResponse.json({message: error},{status: 400})
    }
}
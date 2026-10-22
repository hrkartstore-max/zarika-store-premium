import {NextResponse} from "next/server";
export function GET(){return NextResponse.json({ok:true,service:"zarika-store-premium",timestamp:new Date().toISOString()});}
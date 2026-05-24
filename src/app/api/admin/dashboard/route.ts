import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/admin/dashboard/:eventId
 * Real-time event metrics
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    // TODO: Fetch real-time stats
    // - Total registered
    // - Checked in
    // - Deposits paid/retained
    // - Bar consumption
    // - NPS

    return NextResponse.json(
      {
        totalRegistered: 0,
        checkedIn: 0,
        depositPaid: 0,
        nps: 0,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Dashboard fetch failed' },
      { status: 500 }
    )
  }
}

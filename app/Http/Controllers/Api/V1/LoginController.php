<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Actions\LoginAction;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function __invoke(Request $request, LoginAction $loginAction)
    {
        $userData = $loginAction->execute($request)->save();

        return response()->json($userData);
    }
}

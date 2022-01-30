<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Services\SubmissionService;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubmitFormRequest;

class SubmissionController extends Controller
{
    public function __construct(SubmissionService $submissionService)
    {
        $this->submissionService = $submissionService;
    }

    public function submit(SubmitFormRequest $request)
    {
        $this->submissionService->save($request->validated());

        return response()->json(['message' => 'Form Submission Success!']);
    }
}
